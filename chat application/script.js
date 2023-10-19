// Get the required elements from the DOM
const messageContainer = document.getElementById('message-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Event listener for the send button
sendButton.addEventListener('click', sendMessage);


messageInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});


function sendMessage() {
    const message = messageInput.value;

   
    const messageElement = document.createElement('p');
    messageElement.innerText = message;

    
    messageContainer.appendChild(messageElement);

    
    messageInput.value = '';

   
    messageContainer.scrollTop = messageContainer.scrollHeight;
}