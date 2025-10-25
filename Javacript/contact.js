document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const contactForm = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  const toastElement = document.getElementById("formToast");
  const toast = new bootstrap.Toast(toastElement);

  // ✅ Initialize EmailJS
  emailjs.init("RDGRvTXw___L1_gOw");

  // 🍔 Hamburger menu toggle
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  //  Form submission + EmailJS
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;
    let errorMessage = "";

    // toast
    toastElement.classList.remove("toast-success", "toast-error");
    toastElement.querySelector(".toast-body").textContent = "";

    // Validation
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameInput.value.trim()) {
      errorMessage = "Please enter your name";
      isValid = false;
    } else if (!nameRegex.test(nameInput.value.trim())) {
      errorMessage = "Name should contain only alphabets";
      isValid = false;
    }

    // Email
    const emailRegex = /^[A-Za-z][A-Za-z0-9]*@gmail\.com$/;
    if (
      !emailInput.value.trim() ||
      !emailRegex.test(emailInput.value.trim())
    ) {
      errorMessage =
        errorMessage ||
        "Please enter a valid Gmail (letters & numbers only, starting with a letter)";
      isValid = false;
    }

    // Subject 
    if (!subjectInput.value.trim()) {
      errorMessage = errorMessage || "Please enter a subject";
      isValid = false;
    }

    // Message 
    if (!messageInput.value.trim()) {
      errorMessage = errorMessage || "Please enter your message";
      isValid = false;
    }

    // error showing 
    if (!isValid) {
      toastElement.classList.add("toast-error");
      toastElement.querySelector(".toast-body").textContent = errorMessage;
      toast.show();
      return;
    }

    // Build data to send
    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim(),
    };

    // EmailJS
    emailjs
      .send("service_bt6rwen", "template_hmjn5yc", formData)
      .then(() => {
        toastElement.classList.add("toast-success");
        toastElement.querySelector(".toast-body").textContent =
          "Message sent successfully!";
        contactForm.reset();
        toast.show();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toastElement.classList.add("toast-error");
        toastElement.querySelector(".toast-body").textContent =
          "Failed to send message. Please try again.";
        toast.show();
      });
  });
});
