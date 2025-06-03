const GEMINI_MODEL = 'gemini-1.5-flash-latest';
const API_KEY_STORAGE_KEY = 'harmonia_api_key';
const CHAT_HISTORY_KEY = 'harmonia_chat_history';

// DOM Elements
const apiKeyInput = document.getElementById('apiKey');
const saveApiKeyBtn = document.getElementById('saveApiKey');
const perguntaInput = document.getElementById('pergunta');
const btnEnviar = document.getElementById('btnEnviar');
const chatArea = document.getElementById('chatArea');
const newChatBtn = document.getElementById('newChatBtn');

// Carregar API Key e histórico do chat ao iniciar
document.addEventListener('DOMContentLoaded', () => {
    const savedApiKey = localStorage.getItem(API_KEY_STORAGE_KEY);
    if (savedApiKey) {
        apiKeyInput.value = savedApiKey;
        displayMessage("Chave API carregada do armazenamento local. Você pode atualizá-la se necessário.", 'ai');
    } else {
        displayMessage("Por favor, insira sua Chave API Gemini e clique em Salvar para começar a usar o HarmonIA.", 'error');
    }

    // Carregar histórico de conversa se existir
    loadChatHistory();
    toggleIcon();
});

newChatBtn.addEventListener('click', () => {
    chatArea.innerHTML = '';
    localStorage.removeItem(CHAT_HISTORY_KEY);
    displayMessage("Olá! Eu sou o Harmon. Como posso te ajudar hoje?", 'ai');
});

// Salvar API Key no Local Storage
saveApiKeyBtn.addEventListener('click', () => {
    const apiKey = apiKeyInput.value.trim();

    if (!apiKey) {
        displayMessage("Por favor, insira uma chave API válida antes de salvar.", 'error');
        return;
    }

    localStorage.setItem(API_KEY_STORAGE_KEY, apiKey);
    displayMessage("Chave API salva com sucesso! Agora você pode fazer perguntas.", 'ai');
});

// Mostrar hora atual formatada
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Alternar estado do botão de enviar
function toggleIcon() {
    const pergunta = perguntaInput.value.trim();
    btnEnviar.disabled = pergunta === '';

    // Ajusta a altura do textarea automaticamente
    perguntaInput.style.height = 'auto';
    perguntaInput.style.height = (perguntaInput.scrollHeight) + 'px';
}

// Enviar mensagem ao pressionar Enter (sem Shift), ou nova linha com Shift+Enter
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        if (event.shiftKey) {
            // Shift+Enter - insere nova linha
            return; // Permite o comportamento padrão (nova linha)
        } else {
            // Apenas Enter - envia a mensagem
            event.preventDefault();
            if (!btnEnviar.disabled) {
                enviarPergunta();
            }
        }
    }
}

// Salvar histórico do chat
function saveChatHistory() {
    const messages = Array.from(chatArea.querySelectorAll('.message-container')).map(container => {
        return {
            text: container.querySelector('.message-content').innerHTML,
            sender: container.classList.contains('ai-message-container') ? 'ai' : 'user',
            time: container.querySelector('.message-time').textContent
        };
    });

    localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(messages));
}

// Carregar histórico do chat
function loadChatHistory() {
    const savedChat = localStorage.getItem(CHAT_HISTORY_KEY);
    if (savedChat) {
        const messages = JSON.parse(savedChat);
        messages.forEach(msg => {
            displayMessage(msg.text, msg.sender, msg.time, true);
        });
    } else {
        displayMessage("Olá! Eu sou o Harmon. Como posso te ajudar hoje?", 'ai');
    }
}

// Adicionar mensagem ao chat (função atualizada)
function displayMessage(text, sender = 'ai', customTime = null, isHistory = false) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container', `${sender}-message-container`);

    const avatar = document.createElement('img');
    avatar.classList.add('avatar');

    if (sender === 'ai') {
        avatar.src = '../images/LogoTocaí.png';
        avatar.alt = 'Avatar do Harmon';
        avatar.classList.add('ai-avatar');
    } else {
        avatar.src = '../images/LogoTocaí.png'; // Caminho para o avatar do usuário
        avatar.alt = 'Seu avatar';
        avatar.classList.add('user-avatar');
    }

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', `${sender}-message`);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('message-content');
    contentDiv.innerHTML = text.replace(/\n/g, '<br>');

    const timeSpan = document.createElement('span');
    timeSpan.classList.add('message-time');
    timeSpan.textContent = customTime || getCurrentTime();

    if (sender === 'ai') {
        const copyBtn = document.createElement('button');
        copyBtn.classList.add('copy-btn');
        copyBtn.innerHTML = '<i class="far fa-copy"></i>';
        copyBtn.title = 'Copiar mensagem';
        copyBtn.addEventListener('click', () => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = text;
            const plainText = tempDiv.textContent || tempDiv.innerText || '';

            navigator.clipboard.writeText(plainText).then(() => {
                const tooltip = document.createElement('span');
                tooltip.classList.add('copy-tooltip');
                tooltip.textContent = 'Copiado!';
                copyBtn.appendChild(tooltip);
                setTimeout(() => tooltip.remove(), 2000);
            });
        });
        messageDiv.appendChild(copyBtn);
    }

    messageDiv.appendChild(contentDiv);
    messageDiv.appendChild(timeSpan);

    if (sender === 'ai') {
        messageContainer.appendChild(avatar);
        messageContainer.appendChild(messageDiv);
    } else {
        messageContainer.appendChild(messageDiv);
        messageContainer.appendChild(avatar);
    }

    chatArea.appendChild(messageContainer);

    if (!isHistory) {
        chatArea.scrollTop = chatArea.scrollHeight;
        saveChatHistory(); // Salva o histórico após cada nova mensagem
    }
}

// Mostrar indicador de digitação
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.classList.add('typing-indicator');
    typingDiv.id = 'typingIndicator';

    typingDiv.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <span style="margin-left: 8px; font-size: 13px; color: var(--text-muted)">Harmon está digitando...</span>
    `;

    chatArea.appendChild(typingDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
}

// Remover indicador de digitação
function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Enviar pergunta para a API (atualizado para incluir histórico)
async function enviarPergunta() {
    const pergunta = perguntaInput.value.trim();
    const apiKey = localStorage.getItem(API_KEY_STORAGE_KEY);

    if (!apiKey) {
        displayMessage("Por favor, insira sua Chave API Gemini e clique em Salvar para continuar.", 'error');
        return;
    }

    if (!pergunta) {
        displayMessage("Por favor, digite uma pergunta.", 'error');
        return;
    }

    // Mostrar mensagem do usuário
    displayMessage(pergunta, 'user');
    perguntaInput.value = '';
    perguntaInput.style.height = 'auto';
    toggleIcon();

    // Mostrar que a IA está digitando
    showTypingIndicator();

    // Obter histórico da conversa
    const chatHistory = Array.from(chatArea.querySelectorAll('.message-container')).map(container => {
        const isAI = container.classList.contains('ai-message-container');
        const content = container.querySelector('.message-content').textContent;
        return {
            role: isAI ? 'model' : 'user',
            parts: [{ text: content }]
        };
    });

    // Configuração da API com histórico
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

    const requestBody = {
        contents: chatHistory,
        generationConfig: {
            temperature: 0.7,
            topP: 0.9,
            topK: 40
        }
    };

    try {
        btnEnviar.disabled = true;

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        hideTypingIndicator();

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Erro da API Gemini:', errorData);
            displayMessage(`Erro ao processar sua pergunta: ${errorData.error?.message || 'Erro desconhecido'}`, 'error');
            return;
        }

        const responseData = await response.json();

        if (responseData.candidates?.[0]?.content?.parts?.[0]?.text) {
            const aiResponse = responseData.candidates[0].content.parts[0].text;
            displayMessage(aiResponse, 'ai');
        } else if (responseData.promptFeedback?.blockReason) {
            const blockReason = responseData.promptFeedback.blockReason;
            displayMessage(`Desculpe, não posso responder a essa pergunta devido a: ${blockReason}`, 'error');
        } else {
            displayMessage("Não consegui entender a resposta da API. Por favor, tente novamente.", 'error');
        }

    } catch (error) {
        hideTypingIndicator();
        console.error('Erro:', error);
        displayMessage(`Ocorreu um erro: ${error.message}`, 'error');
    } finally {
        btnEnviar.disabled = false;
    }
}

// Inicialização
toggleIcon();

// Mensagem de boas-vindas inicial
setTimeout(() => {
    const savedApiKey = localStorage.getItem(API_KEY_STORAGE_KEY);
    if (savedApiKey) {
        displayMessage("Olá! Eu sou o Harmon. Como posso te ajudar hoje?", 'ai');
    }
}, 500);

document.getElementById('pergunta').addEventListener('focus', function () {
    setTimeout(() => {
        this.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300); // espera o teclado abrir
});