document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");

    const chatbox = document.getElementById('chatbox');
    const openChatButton = document.getElementById('open-chat');

    document.getElementById('close-chat').addEventListener('click', function() {
        console.log("Close button clicked");
        chatbox.style.display = 'none';
        openChatButton.style.display = 'block'; // Show the open chat button
    });

    openChatButton.addEventListener('click', function() {
        console.log("Open chat button clicked");
        chatbox.style.display = 'block';
        openChatButton.style.display = 'none'; // Hide the open chat button
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");

    const chatbox = document.getElementById('chatbox');
    const openChatButton = document.getElementById('open-chat');
    const sendButton = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatContent = document.getElementById('chat-content');

    document.getElementById('close-chat').addEventListener('click', function() {
        console.log("Close button clicked");
        chatbox.style.display = 'none';
        openChatButton.style.display = 'block'; // Show the open chat button
    });

    openChatButton.addEventListener('click', function() {
        console.log("Open chat button clicked");
        chatbox.style.display = 'block';
        openChatButton.style.display = 'none'; // Hide the open chat button
    });

    function createMessageElement(message, isUser = true) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(isUser ? 'user-message' : 'bot-message');

        const avatar = document.createElement('img');
        avatar.src = isUser ? '../img/avt.jpg' : '../img/logo.png'; // Replace with actual paths to avatars
        avatar.alt = isUser ? 'User Avatar' : 'Bot Avatar';

        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        messageContent.textContent = message;

        messageElement.appendChild(avatar);
        messageElement.appendChild(messageContent);

        return messageElement;
    }

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            // Add user message to chat content
            const userMessageElement = createMessageElement(userMessage, true);
            chatContent.appendChild(userMessageElement);

            // Scroll to the bottom of chat content
            chatContent.scrollTop = chatContent.scrollHeight;

            // Clear user input
            userInput.value = '';

            // Add bot response after a delay
            setTimeout(() => {
                const botResponse = "Cảm ơn bạn đã gửi tin nhắn. Chúng tôi sẽ trả lời bạn sớm nhất có thể.";
                const botMessageElement = createMessageElement(botResponse, false);
                chatContent.appendChild(botMessageElement);

                // Scroll to the bottom of chat content
                chatContent.scrollTop = chatContent.scrollHeight;
            }, 1000); // 1 second delay for bot response
        }
    }

    sendButton.addEventListener('click', sendMessage);

    userInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");

    // Existing code for chatbox...

    // Scroll to top button functionality
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        const scrollToTopButton = document.getElementById('scroll-to-top');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    }

    document.getElementById('scroll-to-top').addEventListener('click', function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });

    // Existing code for send message...

});