// Run code after page loads
document.addEventListener("DOMContentLoaded", () => {

  // Simple page fade-in effect
  document.body.style.opacity = "1";

  // Ripple effect for all buttons
  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener("click", function () {

      const circle = document.createElement("span");
      circle.classList.add("ripple");

      this.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, 500);

    });
  });

});

// Feedback alert function
function submitFeedback() {
  alert("✅ Thank you! Your feedback helps improve the website.");
}