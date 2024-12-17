const greetings = [
    "Welcome to Rice Roost  Where Taste Meets Tradition!",
    "Enjoy Delicious Dishes Made with Love!",
    "A Culinary Delight Awaits You!",
    "Discover the Flavors of Comfort and Joy!"
];

let currentIndex = 0;

function updateGreeting() {
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = greetings[currentIndex];
    currentIndex = (currentIndex + 1) % greetings.length; // Loop back to the first greeting
}

setInterval(updateGreeting, 4000);

updateGreeting();
