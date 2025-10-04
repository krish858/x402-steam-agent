console.log("Extension content script loaded!");

function injectButton() {
  const containers = document.getElementsByClassName("_2bIzQo07mxubFvscA8RIA8");

  if (containers.length === 0) {
    console.log("No containers found yet, retrying...");
    setTimeout(injectButton, 1000); 
    return;
  }

  for (let container of containers) {
    
    if (container.querySelector(".crypto-btn")) continue;

    const newButton = document.createElement("button");
    newButton.textContent = "Pay with Crypto";
    newButton.className = "qV80oahDZsbXiS6lIDLND DialogButton _DialogLayout Primary Focusable crypto-btn";
    newButton.type = "button";
    newButton.role = "button";

    container.appendChild(newButton);
    console.log("Injected Pay with Crypto button!");
  }
}


if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", injectButton);
} else {
  injectButton();
}


const observer = new MutationObserver(() => {
  injectButton();
});
observer.observe(document.body, { childList: true, subtree: true });
