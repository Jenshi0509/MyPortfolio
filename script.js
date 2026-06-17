// Typed.js
var typed = new Typed("#typing", {
  strings: [
    "Web Developer",
    "Frontend Developer",
    "UI Designer",
    "B.Tech IT Student"
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});


// EmailJS
emailjs.init("VwGKT3Yr3SS4yreqv");

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_cenp2k8",
    "template_46aqf6f",
    this
  )
  .then(() => {
    alert("Message sent successfully!");
    this.reset();
  })
  .catch((error) => {
    console.log("Error:", error);
    alert("Failed to send message");
  });
});