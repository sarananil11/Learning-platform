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
      emailjs.init("RDGRvTXw___L1_gOw"); // replace with your actual EmailJS public key

      // 🍔 Hamburger menu toggle
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
      });

      // 📧 Form submission + EmailJS
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;
        let errorMessage = "";

        // Reset toast
        toastElement.classList.remove("toast-success", "toast-error");
        toastElement.querySelector(".toast-body").textContent = "";

        // ✅ Validation checks
        if (!nameInput.value.trim()) {
          errorMessage = "Please enter your name";
          isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (
          !emailInput.value.trim() ||
          !emailRegex.test(emailInput.value.trim())
        ) {
          errorMessage = errorMessage || "Please enter a valid email address";
          isValid = false;
        }

        if (!subjectInput.value.trim()) {
          errorMessage = errorMessage || "Please enter a subject";
          isValid = false;
        }

        if (!messageInput.value.trim()) {
          errorMessage = errorMessage || "Please enter your message";
          isValid = false;
        }

        // ❌ Show error toast if invalid
        if (!isValid) {
          toastElement.classList.add("toast-error");
          toastElement.querySelector(".toast-body").textContent = errorMessage;
          toast.show();
          return;
        }

        // ✅ Build data to send
        const formData = {
          name: nameInput.value.trim(),
          email: emailInput.value.trim(),
          subject: subjectInput.value.trim(),
          message: messageInput.value.trim(),
        };

        // 📨 Send using EmailJS
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