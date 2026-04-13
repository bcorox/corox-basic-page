document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initNavbar();
  initScrollReveal();
  initBackToTop();
  initSmoothScroll();
});

function initThemeToggle() {
  const themeToggle = document.querySelector(".theme-toggle");
  const html = document.documentElement;
  
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
  } else if (!prefersDark) {
    html.setAttribute("data-theme", "light");
  }
  
  updateThemeIcon();
  
  themeToggle?.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon();
  });
  
  function updateThemeIcon() {
    const icon = themeToggle?.querySelector("i");
    if (icon) {
      const isDark = html.getAttribute("data-theme") !== "light";
      icon.className = isDark ? "fa-solid fa-moon" : "fa-solid fa-sun";
    }
  }
}

function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const navToggle = document.querySelector(".navbar__toggle");
  const navMenu = document.querySelector(".navbar__menu");
  const navLinks = document.querySelectorAll(".navbar__menu a");
  
  navToggle?.addEventListener("click", () => {
    const isOpen = navToggle.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", isOpen);
    navMenu?.classList.toggle("active", isOpen);
  });
  
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle?.classList.remove("active");
      navToggle?.setAttribute("aria-expanded", "false");
      navMenu?.classList.remove("active");
    });
  });
  
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    
    if (navbar) {
      if (currentScroll > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
    
    if (currentScroll > lastScroll && currentScroll > 200) {
      navbar?.classList.add("hidden");
    } else {
      navbar?.classList.remove("hidden");
    }
    
    lastScroll = currentScroll;
  }, { passive: true });
  
  const activeLink = document.querySelector(`.navbar__menu a[href="${window.location.hash || "#hero"}"]`);
  if (activeLink) {
    activeLink.classList.add("active");
  }
}

function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  reveals.forEach((reveal) => {
    observer.observe(reveal);
  });
}

function initBackToTop() {
  const backToTop = document.querySelector(".back-to-top");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop?.classList.add("visible");
    } else {
      backToTop?.classList.remove("visible");
    }
  }, { passive: true });
  
  backToTop?.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

const style = document.createElement("style");
style.textContent = `
  body {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  body.loaded {
    opacity: 1;
  }
`;
document.head.appendChild(style);
