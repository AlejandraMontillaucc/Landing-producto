const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.querySelector("input[type='text']").value.trim();
  const email = form.querySelector("input[type='email']").value.trim();
  
  if (name === "" || email === "") {
    alert("⚠️ Complete todos los campos");
    return;
  }
  
  if (!email.includes("@")) {
    alert("Correo no válido");
    return;
  }
  
  alert("✅ Mensaje enviado correctamente");
  form.reset();
});

const ctaBtn = document.querySelector(".cta-btn");

ctaBtn.addEventListener("click", () => {
  alert("🚀 Gracias por tu interés en nuestro producto");
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = "0";
  
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 100;
    
    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };
  
  updateCounter();
});
