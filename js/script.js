// =====================================
// HERO SWIPER
// =====================================

const heroSwiper = new Swiper(".heroSwiper", {
  loop: true,
  speed: 1000,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// =====================================
// MENU HAMBURGER
// =====================================

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });

  // Tutup menu ketika klik link
  document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      menu.classList.remove("active");
    });
  });
}

// =====================================
// NAVBAR SCROLL
// =====================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 80) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// =====================================
// SMOOTH SCROLL
// =====================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// =====================================
// MODAL DOSEN
// =====================================

function showDosenTI() {
  const modal = document.getElementById("modalDosen");

  if (modal) {
    modal.style.display = "block";
  }
}

function closeModal() {
  const modal = document.getElementById("modalDosen");

  if (modal) {
    modal.style.display = "none";
  }
}

// Klik di luar modal

window.addEventListener("click", (event) => {
  const modal = document.getElementById("modalDosen");

  if (modal && event.target === modal) {
    modal.style.display = "none";
  }
});

// =====================================
// TOGGLE DATA DOSEN
// =====================================

function toggleDosen(id) {
  const data = document.getElementById(id);

  if (!data) return;

  if (data.style.display === "block") {
    data.style.display = "none";
  } else {
    data.style.display = "block";
  }
}

// =====================================
// COUNTER ANIMASI
// =====================================

const counters = document.querySelectorAll(".counter");

const runCounter = () => {
  counters.forEach((counter) => {
    const target = +counter.dataset.target;
    let count = 0;

    const update = () => {
      const increment = target / 100;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };

    update();
  });
};

const stats = document.querySelector(".stats");

if (stats) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounter();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.5,
    },
  );

  observer.observe(stats);
}

// =====================================
// SCROLL TO TOP
// =====================================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (!scrollBtn) return;

  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// =====================================
// ACTIVE MENU
// =====================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// =====================================
// LOADING SCREEN
// =====================================

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  if (loader) {
    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  }
});

// =====================================
// AOS
// =====================================

if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 900,
    once: true,
  });
}
