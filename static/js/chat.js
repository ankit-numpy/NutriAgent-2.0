/**
 * NutriBot 2.0 — chat.js
 * Agentic Q&A chat widget for the result page
 */

document.addEventListener("DOMContentLoaded", function () {

  const fab         = document.getElementById("chatFab");
  const panel       = document.getElementById("chatPanel");
  const closeBtn    = document.getElementById("chatClose");
  const messagesEl  = document.getElementById("chatMessages");
  const inputEl     = document.getElementById("chatInput");
  const sendBtn     = document.getElementById("chatSend");

  if (!fab || !panel) return;

  /* ── Toggle panel ── */
  fab.addEventListener("click", function () {
    panel.classList.toggle("open");
    if (panel.classList.contains("open")) inputEl.focus();
  });
  closeBtn.addEventListener("click", function () {
    panel.classList.remove("open");
  });

  /* ── Send on Enter ── */
  inputEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
  sendBtn.addEventListener("click", sendMessage);

  /* ── Send message ── */
  function sendMessage() {
    const text = inputEl.value.trim();
    if (!text) return;

    appendMessage(text, "user");
    inputEl.value = "";

    const typingEl = appendMessage("NutriBot is thinking…", "bot typing");

    fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
    })
      .then(r => r.json())
      .then(data => {
        typingEl.remove();
        appendMessage(data.reply || "Sorry, I couldn't process that.", "bot");
      })
      .catch(() => {
        typingEl.remove();
        appendMessage("⚠️ Connection error. Please try again.", "bot");
      });
  }

  /* ── Append a message bubble ── */
  function appendMessage(text, cssClass) {
    const div = document.createElement("div");
    div.className = "chat-msg " + cssClass;
    div.innerHTML = formatText(text);
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return div;
  }

  /* ── Basic formatting for chat replies ── */
  function formatText(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\n/g, "<br>");
  }
});
