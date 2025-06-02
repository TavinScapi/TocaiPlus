document.addEventListener('DOMContentLoaded', function () {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    const API_KEY = 'AIzaSyBtBoLZNg8InRq5u6xZB6XZSM67ywpdTe0';
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

    // Função para adicionar mensagem ao chat
    function addMessage(content, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = content;

        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Função para enviar mensagem para a API do Gemini
    async function sendMessageToGemini(message) {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: message
                        }]
                    }]
                })
            });

            if (!response.ok) {
                throw new Error(`Erro na API: ${response.status}`);
            }

            const data = await response.json();
            return data.candidates[0].content.parts[0].text;
        } catch (error) {
            console.error('Erro ao chamar a API do Gemini:', error);
            return "Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.";
        }
    }

    // Função para lidar com o envio de mensagens
    async function handleSendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;

        // Adiciona mensagem do usuário
        addMessage(message, true);
        userInput.value = '';

        // Mostra "Digitando..." enquanto espera a resposta
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message bot-message';
        typingIndicator.innerHTML = '<div class="message-content">Digitando...</div>';
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Obtém resposta do Gemini
        const botResponse = await sendMessageToGemini(message);

        // Remove "Digitando..." e adiciona a resposta real
        chatMessages.removeChild(typingIndicator);
        addMessage(botResponse, false);
    }

    // Event listeners
    sendButton.addEventListener('click', handleSendMessage);

    userInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    });

    // Auto-ajuste da altura do textarea
    userInput.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
});