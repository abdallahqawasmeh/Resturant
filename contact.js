function changeText() {
    document.querySelectorAll("#myInput").forEach(input => {
      input.value = input.value.toUpperCase();
      input.style.color = "blue";
    });
  }
  
  document.getElementById("contactForm").addEventListener("submit", () => {
    event.preventDefault();
    document.getElementById("success-message").textContent = "Thank you for contacting us! We'll get back to you soon.";
    changeText();
  });