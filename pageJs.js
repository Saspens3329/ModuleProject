function scrollToOrder() {
  document.getElementById("order").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const status = document.getElementById("status");
  status.textContent = "Заявку відправлено! Ми зв'яжемось з вами.";

  this.reset();
});

function toggleChat() {
  const chat = document.getElementById("aiChatWindow");
  if (chat.style.display === "none" || chat.style.display === "") {
    chat.style.display = "flex";
  } else {
    chat.style.display = "none";
  }
}

function sendChatMessage() {
  const input = document.getElementById("chatInput");
  const messagesContainer = document.getElementById("chatMessages");
  const text = input.value.trim();

  if (!text) return;


  const userMsg = document.createElement("div");
  userMsg.style.cssText = "background: #141428; padding: 8px; border-radius: 8px; align-self: flex-end; max-width: 80%; border: 1px solid #7a00ff;";
  userMsg.textContent = text;
  messagesContainer.appendChild(userMsg);

  input.value = "";
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  const typingMsg = document.createElement("div");
  typingMsg.style.cssText = "background: #2b2bff; padding: 8px; border-radius: 8px; align-self: flex-start; max-width: 80%; font-style: italic;";
  typingMsg.textContent = "Аналізую запит...";
  messagesContainer.appendChild(typingMsg);

  setTimeout(() => {
    messagesContainer.removeChild(typingMsg);
    
    let reply = "Цікаве питання! Я можу підключити кастомного бота або налаштувати хостинг 24/7. Оформити заявку можна внизу сторінки.";
    const lowerText = text.toLowerCase();

    if (lowerText.includes("привіт") || lowerText.includes("hello")) {
      reply = "Привіт! Радий допомогти вам із автоматизацією вашого Discord-сервера.";
    } else if (lowerText.includes("ціна") || lowerText.includes("вартість") || lowerText.includes("скільки")) {
      reply = "Базове підключення безкоштовне при замовленні хостингу! Кастомні боти — від $20 залежно від ТЗ.";
    } else if (lowerText.includes("хостинг") || lowerText.includes("сервер")) {
      reply = "Наш хостинг забезпечує стабільну роботу бота 24/7 без простоїв на захищених серверах.";
    }

    const aiMsg = document.createElement("div");
    aiMsg.style.cssText = "background: #2b2bff; padding: 8px; border-radius: 8px; align-self: flex-start; max-width: 80%;";
    aiMsg.textContent = reply;
    messagesContainer.appendChild(aiMsg);
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 1000);
}