const inquiryForm = document.getElementById("inquiryForm");

inquiryForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const plan = document.getElementById("plan").value;

  const gymWhatsAppNumber = "919876543210"; // Replace with gym's WhatsApp number
  const message = `Hi Classic Gym! I'm ${name} (${phone}) and I'm interested in the ${plan} plan.`;
  const whatsappUrl = `https://wa.me/${gymWhatsAppNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
});