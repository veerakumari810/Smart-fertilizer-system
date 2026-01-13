function sendMessage() {
    const input = document.getElementById("chatInput");
    const message = input.value.trim();
    if (!message) return;

    const chat = document.getElementById("chatMessages");

    // User message
    const userDiv = document.createElement("div");
    userDiv.className = "user";
    userDiv.textContent = message;
    chat.appendChild(userDiv);

    // Bot response
    const botDiv = document.createElement("div");
    botDiv.className = "bot";

    const msg = message.toLowerCase();

    // Crop-based fertilizer recommendations
    if (msg.includes("paddy") || msg.includes("rice")) {
        botDiv.textContent = "🌾 Paddy: DAP 50kg/acre, Urea 30kg/acre, MOP 20kg/acre";
    } else if (msg.includes("wheat")) {
        botDiv.textContent = "🌾 Wheat: Urea 40kg/acre, DAP 40kg/acre, MOP 20kg/acre";
    } else if (msg.includes("maize") || msg.includes("corn")) {
        botDiv.textContent = "🌽 Maize: Urea 35kg/acre, DAP 25kg/acre, MOP 15kg/acre";
    } else if (msg.includes("sugarcane")) {
        botDiv.textContent = "🍬 Sugarcane: Urea 100kg/acre, DAP 50kg/acre, MOP 30kg/acre";
    
    // Fertilizer description questions
    } else if (msg.includes("what is dap") || msg.includes("dap")) {
        botDiv.textContent = "DAP (Di-Ammonium Phosphate) is a fertilizer providing Nitrogen (N) and Phosphorus (P) to crops.";
    } else if (msg.includes("what is urea") || msg.includes("urea")) {
        botDiv.textContent = "Urea is a nitrogen-rich fertilizer commonly used to improve plant growth.";
    } else if (msg.includes("what is mop") || msg.includes("mop")) {
        botDiv.textContent = "MOP (Muriate of Potash) is a potassium-rich fertilizer used to strengthen crops.";
    
    } else {
        botDiv.textContent = "⚠️ Please ask fertilizer-related questions only.";
    }

    chat.appendChild(botDiv);
    chat.scrollTop = chat.scrollHeight;
    input.value = "";
}
