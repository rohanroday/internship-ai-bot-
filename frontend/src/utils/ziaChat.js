// Sends a question into the Zoho Zia chat widget.
// Zoho's SDK has no public "send" API, so this fills the chat's own text box and
// clicks its send button. The class names below come from Zoho's widget and may
// change if Zoho updates it; in that case askZia() returns false.

const SELECTORS = {
  launcher: "agents-chatkit .agents-chat-launcher",
  input: "agents-chatkit .agents-chat-text-input",
  send: "agents-chatkit .zia-agents-send-button",
};

const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const isVisible = (el) => !!el && el.offsetParent !== null;

async function waitFor(getEl, timeoutMs = 4000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const el = getEl();
    if (isVisible(el)) return el;
    await wait(100);
  }
  return null;
}

export async function askZia(question) {
  const getInput = () => document.querySelector(SELECTORS.input);

  // Open the chat window if it's closed
  if (!isVisible(getInput())) {
    document.querySelector(SELECTORS.launcher)?.click();
  }
  const input = await waitFor(getInput);
  if (!input) return false;

  // Set the value the way a user typing would, so the widget notices it
  const setValue = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value").set;
  setValue.call(input, question);
  input.dispatchEvent(new Event("input", { bubbles: true }));
  input.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true, key: "a" }));
  await wait(150);

  const send = document.querySelector(SELECTORS.send);
  if (!send) return false;
  send.click();
  return true;
}
