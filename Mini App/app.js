// app.js

const tg = window.Telegram.WebApp;

// Wait for the video to finish before showing the main content
window.onload = () => {
  const video = document.getElementById("loadingVideo");
  const videoLoader = document.getElementById("videoLoader");
  const mainContent = document.getElementById("mainContent");

  // Automatically hide the loader after 3 seconds
  video.onended = () => {
    videoLoader.style.display = "none";
    mainContent.style.display = "block";
  };

  // Fallback in case the video doesn't play properly
  setTimeout(() => {
    videoLoader.style.display = "none";
    mainContent.style.display = "block";
  }, 3000);
};

// Initialize Telegram Web App
tg.expand();

// Interactive Portfolio
const projects = [
  { title: "Logo Design", img: "https://via.placeholder.com/150" },
  { title: "Website Development", img: "https://via.placeholder.com/150" },
];

document.getElementById("gallery").innerHTML = projects
  .map(
    (project) => 
    <div class="project">
      <img src="${project.img}" alt="${project.title}">
      <p>${project.title}</p>
    </div>
  )
  .join("");

// Instant Quote
document.getElementById("quoteBtn").addEventListener("click", () => {
  const requirement = document.getElementById("requirement").value;
  if (requirement) {
    document.getElementById("quoteResult").textContent = Estimated cost: $200+;
  } else {
    document.getElementById("quoteResult").textContent = "Please describe your project.";
  }
});

// Booking System
document.getElementById("bookNow").addEventListener("click", () => {
  tg.sendData("Booking Service"); // Sends data back to Telegram bot
});

// Feedback & Testimonials
document.getElementById("submitFeedback").addEventListener("click", () => {
  const feedback = document.getElementById("feedbackInput").value;
  if (feedback) {
    tg.sendData(Feedback: ${feedback}); // Sends data back to Telegram bot
    alert("Thank you for your feedback!");
    document.getElementById("feedbackInput").value = "";
  } else {
    alert("Please enter your feedback.");
  }
});

// Creative Inspiration
const inspirations = [
  "Design is intelligence made visible.",
  "Creativity is nothing but a mind set free.",
  "Simplicity is the ultimate sophistication.",
];
setInterval(() => {
  const randomInspiration =
    inspirations[Math.floor(Math.random() * inspirations.length)];
  document.getElementById("inspirationText").textContent = randomInspiration;
}, 5000);