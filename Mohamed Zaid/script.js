
// Define watsonAssistantChatOptions globally
window.watsonAssistantChatOptions = {
  integrationID: "15fedea8-9b13-4487-b987-5016bbf17f27", // The ID of this integration.
  region: "eu-de", // The region your integration is hosted in.
  serviceInstanceID: "5c014e94-79e9-4fd5-9302-89939660b22d", // The ID of your service instance.
  onLoad: async (instance) => { await instance.render(); }
};

// Function to load Watson Assistant Chat Widget script
function loadWatsonAssistantChatScript() {
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
}


// Static username and password
const correctUsername = 'Mohamed';
const correctPassword = 'Zaid';

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var message = document.getElementById('message');

  // Check if password is correct
  if (username === correctUsername && password === correctPassword) {
    message.textContent = 'Login successful!'; // Display success message

    // Hide the initial container and show page 2
    document.getElementById('Container').style.display = 'none';
    document.getElementById('Page2').style.display = 'block';
    loadWatsonAssistantChatScript();
    
  } else {
    message.textContent = 'Incorrect information';
  }
});
