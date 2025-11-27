const quotes = [
    "Believe you can and you're halfway there.",
    "Dream big and dare to fail.",
    "The best way to predict the future is to create it.",
    "Do something today that your future self will thank you for.",
    "Stay positive. Work hard. Make it happen.",
    "Every moment is a fresh beginning.",
    "Success is not final; failure is not fatal.",
    "Your only limit is your mind.",
    "Small steps every day lead to big results.",
    "You are capable of amazing things."
];

function showQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[random];
}
