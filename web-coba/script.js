window.onload = function () {
      // Efek partikel bintang
  const canvas = document.getElementById("bgCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    });
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(animateParticles);
  }

  animateParticles();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  // Efek teks ngetik otomatis
  const typingElement = document.querySelector(".typing");
  const words = ["Mahasiswa TI 📚", "Web Developer 💻", "Pencinta Kopi ☕", "Belajar Coding 🚀"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    let currentWord = words[wordIndex];
    if (!isDeleting && charIndex <= currentWord.length) {
      typingElement.textContent = currentWord.substring(0, charIndex);
      charIndex++;
      setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex >= 0) {
      typingElement.textContent = currentWord.substring(0, charIndex);
      charIndex--;
      setTimeout(typeEffect, 100);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 700);
    }
  }
  typeEffect();

  // Modal Popup
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("btnKlik");
  const span = document.querySelector(".close");

  btn.onclick = () => {
    modal.style.display = "block";
  };

  span.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Dark Mode Toggle
  const toggle = document.getElementById("darkToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
};