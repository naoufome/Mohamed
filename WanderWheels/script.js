window.watsonAssistantChatOptions = {
  integrationID: "15fedea8-9b13-4487-b987-5016bbf17f27", // The ID of this integration.
  region: "eu-de", // The region your integration is hosted in.
  serviceInstanceID: "5c014e94-79e9-4fd5-9302-89939660b22d", // The ID of your service instance.
  onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});