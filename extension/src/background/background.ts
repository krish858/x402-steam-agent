console.log("X402 Steam Agent: Background script loaded");


chrome.runtime.onInstalled.addListener(() => {
  console.log("X402 Steam Agent: Extension installed");
});


chrome.runtime.onMessage.addListener((message: any, _sender: chrome.runtime.MessageSender, _sendResponse: (response?: any) => void) => {
  console.log("X402 Steam Agent: Message received:", message);
  
  if (message.type === "PAY_WITH_CRYPTO") {
    console.log("X402 Steam Agent: Crypto payment requested for amount:", message.amount);
   
  }
  
  return true;
});