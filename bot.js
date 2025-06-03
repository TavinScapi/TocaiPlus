const GEMINI_MODEL = 'gemini-1.5-flash-latest';
const API_KEY_STORAGE_KEY = 'rosieai_api_key';

// DOM Elements
const apiKeyInput = document.getElementById('apiKey');
const saveApiKeyBtn = document.getElementById('saveApiKey');
const perguntaInput = document.getElementById('pergunta');
const btnEnviar = document.getElementById('btnEnviar');
const chatArea = document.getElementById('chatArea');
const newChatBtn = document.getElementById('newChatBtn');

// Carregar API Key do Local Storage ao iniciar
document.addEventListener('DOMContentLoaded', () => {
    const savedApiKey = localStorage.getItem(API_KEY_STORAGE_KEY);
    if (savedApiKey) {
        apiKeyInput.value = savedApiKey;
        displayMessage("Chave API carregada do armazenamento local. Você pode atualizá-la se necessário.", 'ai');
    } else {
        displayMessage("Por favor, insira sua Chave API Gemini e clique em Salvar para começar a usar o RosieAI.", 'error');
    }

    toggleIcon();
});

// Novo Chat
newChatBtn.addEventListener('click', () => {
    chatArea.innerHTML = '';
    displayMessage("Olá! Eu sou a RosieAI. Como posso te ajudar hoje?", 'ai');
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

// Adicionar mensagem ao chat (função atualizada)
function displayMessage(text, sender = 'ai') {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container', `${sender}-message-container`);

    const avatar = document.createElement('img');
    avatar.classList.add('avatar');

    if (sender === 'ai') {
        avatar.src = 'data:image/webp;base64,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'; // URL da imagem da IA
        avatar.alt = 'Avatar da RosieAI';
        avatar.classList.add('ai-avatar');
    } else {
        avatar.src = 'data:image/webp;base64,UklGRuwbAABXRUJQVlA4IOAbAABQnACdASo4ATgBPpFGnUqlo6KppDRbGTASCWduvQUF9SqY5ktStGsmt2jmOy522zdIcfLa+mmhs8v/7edj9/JFvwGBtGNPp0/+gxgyt3gzocEOH9Fw/6GWDLBlgov2XeXaiWUVIdy8EKJgjITj9N0kBktnK1A8XXZZmILpviW9Qu8AHar/C3PQykjVV9o3B/m0JqUHas+oUqpOLkXoldl/tpkwmBE4J0zJA509waFbSrPKq2Rf8DYpv6WK6yo7aJPxz0EZn6FofrKXJ5yuq0GzIgS8mGQ4q7813T+UjJfyk3sqY238/FnUScVgFn9O7vl3JboY4/1pm4AMTOuxfp8t2w2yx4maeITI2wwriix+O7h1JIYbBJEdfRmBwVE98gUbx7WXYSivwbfzjQW8+/fVimY792r6XhLi9fzycJPMfYacXvbTG37/Irme8ZaBDjEOhlo8o5x/Ko24STBVYHzQkqiSqxgvRRiqJVzGcvNXnE89OeiWcjJQ3qMY0tL4YgOSoryRh91IozgcXmWVEYdiPVRnzHPDfe9cgFvk6VcVkCrB6/Y63edJ16zz6F+bKgODz8Z3aZNlkxDxGjXdmbqCt2bfL7KKzo5vuTBuvPe0SMW3I4yKkmN4gWSl/K3zASG/vhF6U+iC5i4i7Iv8ngTGd4/mDNB0DI7MLDjN8q/m2IgP8gvlPBiY4z3aDJIwuaDz+TuR7ZDfDPvEtWV/3S//jR94/7HyO0tkzq5SFxTMIJeDqUJ1MNt58Lz/zhH/cSERniY9Rirhu0j8fPJgtLofUNvaGXbL95pk4OhLWpMEvqXTZDkwBnGHcMqLdDFkAxFGIaRmBXautRNN0L5zp0f9lD5DZyVpj8FKp/x9+dw4tZJy9+zlX8n0Yddm1Uij2FzbJzab6433I1z4CtWJu9AZBbdm+DDGmqPqb42Hr0/25V9Y1QmlLDQHGX+G2NR8sy7AzQC1zpa+IXGuNCrUXwJG0pQ6XFS6tIGpa1HvOY92bOPWIRGhb7txZr66IdMASgckhAQjdchpQonOKVzvSGZAUJdaWO+teFG33hxdNHW+eUkJer1xZiefjH6QVpS9Hn+kYSsfiD5yMgNJQIBICRPczbS/cZVXheMtXRFg4scEv5aWo0vszGy/PkO6iClQiz2xvjoMKkx47T807nFoDld0TKhNJ2y8P6iqvAC7JWSV5kgPrYRmTSNmtGVu3/D2rHyVJu+p0AM5mKLi33kSJBiCM1KNGzjv828qDC7D57lYpmVdNw0qDOlldBMrggNMfC3dHzUv2kUNUsXqnWaoHNYetP9pb6oz09zyym/jkfsgij0GpZNcXy9wJsG4eRCMeMsdLFIPxJ+sAcxlOvs/YFRxTMukFOKnvidjWr/frJ2sHje9th3lA8sTuNwD5lxYaArgaBArNwdqwHycSRCrrzPCsWT9aUTrP89ZJNwkb2cLlz4b0IogqY4vWuCn/B8kdVq+ypiYtNeqkxNNvdx8ZEC0k/OVHx7NZy0TwgAvp4jXy7p5GSCIXlCukd7DW6xLQs6OrQF67gWIzJptz2Zdn9jlqDQQVARUehZyBhcF7+41UmY9pe5aSeWnbMmf1/ARFSAhjLld08QFtZRfBkC/MjSaivT26MMIaUXyNjkF4CyfuqXOEH+uzeCrDoyAFQU3ONB1P//x61tS79VQUAD+9Ije2ApvBSEMo5T2g9j+fvKJmDYvH+avalXi062yV+jf1aHgYB5dMmh7qrud/Lt3EwMh5+fauF4RjsXCi+Z0xRTWSYGffjAF92jA8HsPqvpWxDPNhdtTNdFBNFWtPxOS2CmMdeDgLBN9GC/15gAUPfHPNtSEVckPsn21uS5E9JGT15iT7HLFsN/N+hM1HV8FUDYQojpOkj3FmRoEPdmnDGyjlbGdvmzdFcPkzIx9MaHyxNsPDAWfDHQwa4XLM8N12a+lRDgQ2PcaXd5k38hZcknxqkWU+EgbQI5D+BRAKOFJhz4oc9+CjsudsqDp4l1P+oYfImlgPk7SCpluJMdwUNzFF6AxjPiNCRocmtj9bhNzCF3kofcrlPBdKbhAqyhnduvZav39Vb/ZiV4T1w/r28k2YxNHfSQzTkItcrJ2I+UHnqtEzylewdXlBAD9iqRAZxgN5niYWL0zzUPLgTGXamVPyFYdKFVQ4gpPUHqyL8N16DbADMGiCjRGOZCnQow19jW46+zuSE6SWXLw2Q3c2BO7nSPis7hkmSeogADuYQp1pudFFViojaHSxTpEMA6gp+w/Fj28uH0V7yMD/lj1LYBNIma+2SkcGHuAoPsxTquTXVmicFaW1K+GHhlbvKzQvjTRPH4O8mhkaB76LAEVX+nGkLDgkZ5xCdPdOWxRPHYkdZH6qcLo2wOiLz5z9AxXv4NGIuaV7H7fQVJdH/KqkDJ+b6d2deQS5I8GWKuY5/UAlL5M7of4Y9qoDlN+FHiIATr8rr1x4EVJgDjuvLQDGAHxlrInq/DG9W07NVTAFjY5PNIvinWIjzQvKM8PJxdEOs3XCc/Up9rxtQvzjaUeok64oYGSnPitsS9kNU1xNTK3rxlHBKLCnKM/Oh6yVatZpAuFxNrsYqBlyjUFVWLPDpHZ6q+HvuLiN2noBv/jexXh9QRYNBxFulZmzpJofT01SKNDPDHAhXH7nM9leWhA5ZQ0BWwym7NhCJbbfxCoS2zGpu9jTTY3mKnP2GR/xELHfAr4eZYU/rVy7DS+Yg+UcF3eezjbTPkSrBE6/giQkNHzhnjgAA7kl6jyjS8B9yg/MxGKCbWwmIgoqiOv9Pk6V7dRn1u1VSR+6zoebxdDlFpZupVoTbGQM91hK8ODFZWfR9z0ZxMSiUHsWtl7GlSv+2BcHu2W5Lk/ElWxQl+5dwEhagR9Kqyx3MqoDMEQLtxEodS0F/lVsp6UXOK4ECrhtSayCwj6qc0td0l9woMEqovT98RVLPHRLp0SahoTF0d7YAdq+vbtLISRige21Kzk41mdA4ziMLzjWZ8xpFTaHKTornlt0FajCNQtbSNw4O9Uz4JrnMHWiQhR1VSYIybxskqjo8ptDj/0MA3V5cFaCNLW+UJv7Y/QTuEdXVKjlPwv6KhLS/yPKE8FolwZuFBJaeDKuLX4fMRd7aRy3LlOTLZOw93D+alHS1usDnd07fovxka1+CcAxEHbmLboQvXd78PLAabaiDevfxxHzVJbm2oVEyRfZLyhoLX3B6QF1fL7d73QusurFg7NFZJUv1htJpmHwlfcJjSgh5acRu4ZzPb8kWqtmUQjrQ/kpKM+3P6LL1B5xEAT/+BjvYprAvYZzUfim1kQYDRpd383RnhtvVIVov7Z3Ka/ePGpshpTVRfO0nw6oprx1956R4ffGpxHLD395p0XJ45EjBFoi2HsTGIn1eDxrdR7m/fWptnS/CnzPreDZiUFXTQYxysCP9IlmMv9YUagRqMVRF720z0PigcjIBlLlGWySB1XG4z3sfR23RhdVAlaq4M1Boc+bLpylXrkgCWYHqFIQ6U1o4KcvC1bUGrhcFGE++tEplikXRWPbKZZ5fwaBZLco9Rsc7QbGp7kQBFaB0aQjD7zUWguNgMYuAiPFGUp4IQCJF5P1TZrqcdPz0gFG0Ed2WLICkmD6dx4P5QC0MIRz4DEE7X6fDSxrpfkiGNTw3+xdFv8rmMU98Sz1Fd4W2JTQOW/b8AjQ+0HJyqqdIg+z4PuEl+Df04+9Nj9SqOT/bPoPzPY+TKAJHhJszHm4FSyyUHcNwcyQrEanQx879W/Xtl0Vhh6bnmmKhepRDVvbhB5Sc2/9YX3ETf7w0nWS6QH9lsjz5/iNWg8U4eXPQTgVn/6qicmgpHcl522WXRnMej+/UqM4dUlbc12MxnrLjjYUZZhzHOYdyxLlCuSYY3AEI4OKUTYvYsGoaZyUi51zshopkWvtnGoAPhQOMifdVw11S6xdrNabuepu+K7DH38hyrJVwwB+ntTt0mW8TKCODNyp6EhyO3ti15PjpgY3jacaKH/jGKSQkEQJhtJIjV/B3j1Me+S2Ssch6mYKKga8VJcz0PFQ6IAuw5Y3S7Vt8ypKjfGFolh4G647nY3qq/YDHCy6hM+NxxKNCNqCF2ZqaTAldKkTjLlETZchL59ZnvWS3LsH0qpuruvaKEn5iagAgH3YZJKKUXLyd7oCr5Iq/OvS3X+1ZQwhxlxMpm3FFS/lxe7ynK+fMcB66iG/xFdNXzTW2doeQh1W96ye4xblo5mRXNusQ+dj36uE5qOUFwCnhXU41sHyxfHp+tO6UW2yKQhsqsGTJj/Fxt2IPoCg0WYACBuoV2X1XRr4vI8ZSmIbIEX669UsR27qxIblhfOgLYy1HOUW9kOZuvaBALpGbfjqfrmV91NgMsSnUvO+XsCZ4DokXzV501NiVbXbm7mu6ELGxgtQFJ6J9dW62j71bN7nwRKVeDLF1pyPT410oxpgWEUFxiD2tRLQ8FtatXD7wz8Ed00aN+wvZPcG8Il+2EEeFgkLFWtmsmqV8vQzds7/Sk02qy5d0uLweNTAtZHfJMc+hiS1WzVAOXgAIPmv/WLLFP4y4YXtNHUBc37T10k5VIatq7MOX8ZBXfh31JdGr4u0vIQxJsuzK7HfkOOTHedlifEIpmr+4BoTHeT7yyIZf7KUgzYQIsq5OTsAEjnMrA4q++a++EYtQ/DU8dZg5WeWEKnui9k3xWlJ+LjpS5TKhom21t55zvPuoXyzO98z7vhZlSM1IfFxWU/dSl9xVgmlFztC9CN7NXG4mvGsyObVQ2qYnqpvg0yVbn+nTe6rhyndG++JyOjETjxJLpOPlFA8+nsof3dOkhl0XJJa0HoVv/hBsgNkTpSq4nL5O2zxIUEyU2konoFq2TdjUgzTyNmcIViMBNyMvA3+6UIRT3VzahKC7/sFftKGibvQmQa8KUvecZbBBU/awSv25Ed3svgV4rAPberzr4FsDI8HY60GswEuJ1QiwcvfJKJ6f0ttcKWHsdCITGeeR1VzfoR/4acwH6AZ4Tyqh7ekXc5ZaRSy0QmAx3roEH6rU3B78ZZC5sGtyzp3q2G1vVkoUlcOSOJuB51D9UIGox9uZpWytHQAEO/sX400h63Xdq43OSelNuFf1KkYP7i+NsAMqjJBNT5K2MBpo1ohnVSooI9up0Q/L+Can4d6U5pzYVPU5qDJVD5OuYim63e6wSPProUVLYTjGzhAQZuF+g03PmLgGRqoQTYIpjK2lNQ9omnFOqj4NJPE5yXPG2ZBueqCsH93m7Nb8bL3yfp0rce5BgXcHrONEN5zZepH5ho0i0Omc3g8ZbVOMsSQOKsZ4IVIxJZMsPnKIaWtsCyJN4RI7EE8ybj3IAZngn0ENVfWXX350a4emlh9G/wbWtRicM/AOkPU+oD1uPGSFocxxNKrhqC3uC3id4pAWBQi4wxhUVmJrjSzuq7zjDKrw4aOXiPvw6mliFqlQG44FRu1AB+S4e7uhH6vtRd9NNXBpvZ25bYSCHswzSx4Lvnd2hXi+HjdY1uzxZ5ywZrL+FqxNHo5jJWoGCPJtlHixUbHRK47QcTQtzvbuFeoOFsSmSSk8/j6ufbf84MBHeqAq6FiMuThZvBPzdlaTgPNf6VByFEmJW1ABXgiOHfbYJQo5pLE3xany51Zk/yVXW+FYVdtuVnEkeEzjV4xzQHfllGD+B4cZIFuyBAj9LZJ+IKTIdthG+xANOS7Zu6ARQuE4K/yeVnPwTNU2A7a8VLK9oeXbskxoyJ2BbWB9KNttqc7hWKU2UDnOEWsIKRzyE0B93ycN3Kf0fmnocgvtl4n1GCEDbgYfdk91c0NQUM1lb9Y0cWxwX8gavVXLXArgByp1hafuWbLn6Wz4HdOaEL98EElfzb9Q4r5dijKhz84/aRhz/+Fku32PyidB4oXbw0OyqOw7MpuBWpJZzNR57uppSw4Nyjic1pmrEy0702czwxnK8HsT+ORo+oa2D3DtY4zvTxNEMBNfvT1mqYWvkc/TxyV5rwoRuVXpsiRhTGslnnGytfzSgK99MMH6Rdty2q428pdxgMl5z+RNyZv/f10KbctJp+W0chpaWtW/xWv96sq7LMB+ZlWXMy7V2uhcs3rS63XaKdqsDg7RJ527BN1GVWm3PPYubHFiBSSj4SBxdxmO6ZnLBEZQRIvIZkslVoGaicAmYkgUhXeHSY/n7rbJdOJgaGCgnZ+QQwyAp0tV4vlfoqpHj9K7IQkD8ZGxgjuPOyJCf+xfL5tBMg8tqI5JAZVAUqeeOhuyicA9Qerolq0bC7CFddHDnWiVlPanP5X6aqmsuXDFbA01+g/p/QrkdYlnC6E/P6sc97ORCBTK28rVbUMEtOSpggKuTZDRJ+WW7STZtAOuk8T6lGDo15nWeDvZ/ng2Ko3YBJi6H6C6+2GBawtZPNV110ldUtaIuAtaVWrOTGwEH+t2w4sHW/9WPtiG9wKir3TjOO9R0MRSe/Uk1zKNTl2IFZRCMXdViub5I2feoqLKpFE36L9SWFTEIdf1ujl6kmtb7rfWnDePkC3L8BWTCzk4xeFMKiHb0NiARxtWQlyD5C25yiwnxtrCES6eBwd1CHot9FeF6ebWs49YIbcIy+Vqm+4niwjki8t7XSy6J2zylre1fyHCMaXrpywBY4kTxt6mwsm4rRDEV2jO+h7twT0JSfrUU4pdmUYj/acTtLis5hV77LA2Zn1neShDVEHfMcZyd28jKYsTdLHwnF6lGkXifOzwCPXV19iRWU4iSdCV2nbN9JYyaewaokZ7BFPBB3g5UnX95kdCUMh9OCblGSo4WttgOkQS/8w04UXfcKQTqPqtlDonyRIogmP1Z7ONTLFY2rXzOsQiBH5BFeFYhY/UoxGYq/KR42dvJVEdnkUllUvUhv73xtdLzJwaNPDSqiIqc+8GoXBpGHpesrnP/wjRf1HASkM5sMlravvVtiMcd0Rqi/2sNH2Gkm3c4Pu/Z5PI94VaFZSYE+5YYCrNJmPTMY9BF4nK+kPcDieRuFbBhUlHmADOOcoEqTXuktyG/aic4csI1FDuN7V2eT+Wu/3znxEtgBS5sk9VhLLd85mI5HHAAirCGOuR13Rt7apdOZH95E5tDB/r/oLL/s4ageLcNlhXoP7NO2IaSeGiOLuFK1q3QNXYF62SikCwzPKTK18qiEfCB+xiAlaWgGXIOE0lc6otfHnsZHl0MR8L5QY6HbHl6+BJ7Gy5GYhoOAZHw2LxgaTFIVKoFCWMYMw9XJc3WvgFXMPzOeHRaONO/x/mBDRz8UbpTEgjUwxDeVUAM6fXxmKoPOW32xea8kiuvncVWczlie/lOBKgErOfJF28E/dR4KfEYUn9jyXCuwvV9w7eNl9giSPSdR3xheVgM+wPfTBAtjDGyTf8HOv6E3LFelGH5LEvUA7Qqcc3ovqZdPWkPo2U1jyrj8nbly1gAIHjPlZ5FxzQA7Uc7bBq6fnOoX6RCWDDBT5EhYD9aekY3reiGyY6J74+nQ1vqarms1GiFPb1a20jijSSLoAL5/kqK3NphFjhsLoICoSdfC0BXagOisVrAKUWQa4Nzqjwy2E14huRyTEunRz+BwPnmYHT5+aynILa87mzIO4SzXNJuKGb1CwxXionBPlF5DxzdKrXxM+MXal+ikHaLN5gE0gQH2mzgkZTHYdRQhcc3KJ6C9BaPhLNt/3d/JaQi3Y8sEadJISffPEFunFi/Z97NCLVT2eyR7iBa39Fhj1ME/H7+/DM7jXDBbxVCv2soec1G62E02LKMPRGyZmpIpP6kAr3SxiAnCfqNosx01RJplUa9Ln6EfuVqYxVlLis2/0vyF/ZuQR/pJUGndV+Yg9JHYEJxDIHdfXwLH0YI5CIfpziG+xfISwx598VTiuNgT4LBNUMA7XWVnIsqh94JcGyUkoIg5TlPZmcBdhCTQXYYHMmhwa03l+K4CEVRt3e/DXGPLhus56U6GVFuJ8b5Gun7ibLMinMSDcfQ3uVa2+CbEnc6nzTVhYbgxbRRV/xv/jTkUdnQVpxc1yAPO1SgR2wqNtrZ58cO0vcop70J9dGA0XZwPWLg2BgMWQ6H7azye8EiboWY4GetNyUr7wrd7abUhOcDIrTBEPozUUxzfbdhfJ5I5sSaXmk2BEJMcqfdQZr3qlBCpQdP5QNgN0pBBQcFIsHPjty6fpMMKghD/6RRhLhqEfV0ifrAJtZybFA1ZpA9R1mgBqOABGPomHGNLNjZN7iIqaCvVD4dLTLelZz+5cbutHjoM+SWCiTeSrpTeTotb+ZcW/WvXw63X+zyM/W6awU1t3et61PlM0KgAVxxun2wuTix86s/HX1cahw3VcxPYiAf3Vh1bJ6GH5JmKLJm9ohLkRi4x+X5cZ+XmIvoXfcGttjixNyGJtUQHyfSRVfkz6hk90DeMu9Up1XtgAfIzXI2UDAs0Ibh1u0XtNJtwThr3Rr5HVG3JJobTQzkBewNQzRcnLN3eE1A5SXFjtDPFEnHx2kg/OUGNdDFwprO/r6cWfmJTODDWXldOmmOyTWm6hJlLbhHKZ0lyvmdTuY4FQ3HRl7l3bmWKNDHY2D8aNW8GDyeVQK1GIfmtWvogxGCo/6PYsKopp88sc5b8TAlJHQ5m+W/A4vAHn9fGeLndmHXFCVCfTDz1SVvRLkIXLAPzCZRMp1ol4a8XS0Xl51M8XVm0araFaWV9RUCG62kjiBQQauAc3lleJCUceGZFXG5XcnCqk30wl5+n/InZR2xoMr71AJDl3YHtDixLXDZagrrg+RSJtVT9013NLwKx6YzbMRL5Sgzrh5voFpm3BDuCijHa1nHfo4Oz45q5bnGrZ433YTEdfirGBtLrDMnGff+XEOPlVDUVsxxLui5F5uQc+IhCqArHdebuEo1R/ct5hyeW8Uyy/sRQhEVa72PNdpyTESb1Sq0b1sXAn1YSmVSP7AMcBJz66RqH1E/8TcrIzQRThMTD2wLyq4mWjFsJqHZig3OhGE/hUNDWEuAkL0niMd/+x+7epL6RjC4Ps+iWqm+wJWHkjyB4E5diwmCUprm9Nm70SdzQ2p4WG37o4uA7/eY5876Q0PP5m2DEjsuQ8GxYEPfLiXSCCKBioZG9H2XlmdYUSg6Qr9XgjN5YqVlEavCy9yE0wqiatQBzufYB3Mw7MF+I1gwJggX7UQoCDi8/hFqpSMA1X6bdAsEodEbqRoSM0yhgrgOb+jkmQjm04K/JQsljUTvFp8sPdHOWBr2QDbzko3yoAcK45qISYC9L0IN8wmR7HO4nV/fiqAh4QbgallmQ77dF6mZEjEtLbybcxi2GUZO+Yt46LyiWmqg6m4jMqqYZ0pwiijTvg0IRNB2MJz28oFGskCf6mZ+8mxDE7AGLTBhEhQyajrSM5nbWGwwyJNrusVtDPKhos6dMj26yCJH0v+WmkZjALCzkApi1O3ZmP79x7VBZDIYkZHLOsIv2q3mxlAPwsmWGj+BHy8RPtRQie2vgAp0Dev+Wfz+p+9k8BoZY8JCpXlnEpBYq7sbYobK2aKAD8K09B6wAAA=='; // URL da imagem do usuário
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
    timeSpan.textContent = getCurrentTime();

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
    chatArea.scrollTop = chatArea.scrollHeight;
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
        <span style="margin-left: 8px; font-size: 13px; color: var(--text-muted)">RosieAI está digitando...</span>
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

// Enviar pergunta para a API
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

    // Configuração da API
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

    const requestBody = {
        contents: [{
            parts: [{ text: pergunta }]
        }],
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
        displayMessage("Olá! Eu sou a RosieAI. Como posso te ajudar hoje?", 'ai');
    }
}, 500);

document.getElementById('pergunta').addEventListener('focus', function () {
    setTimeout(() => {
        this.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300); // espera o teclado abrir
});