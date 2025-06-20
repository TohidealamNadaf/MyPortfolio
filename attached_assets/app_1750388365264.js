const themeToggle = document.getElementById('themeToggle');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.innerHTML = document.body.classList.contains('dark-mode')
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// Typewriter Animation
const typeText = document.getElementById('typeText');
const roles = [
  'an AIML Engineer',
  'a Full Stack Developer',
  'a Data Analyst',
  'a Problem Solver'
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const current = roles[roleIndex];
  const updatedText = isDeleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  typeText.textContent = updatedText;

  if (!isDeleting && charIndex === current.length + 1) {
    setTimeout(() => isDeleting = true, 1200);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeLoop, isDeleting ? 60 : 100);
}

typeLoop();

document.querySelector('.download-btn').addEventListener('click', () => {
  console.log('Resume download started!');
});

// skill section
document.addEventListener('DOMContentLoaded', () => {
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.1 });

  skillCards.forEach(card => observer.observe(card));
});

// Education Section 
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(btn => btn.classList.remove("active"));
      tab.classList.add("active");

      contents.forEach(content => content.classList.remove("active"));
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });

  // Trigger animation
  const blocks = document.querySelectorAll('.timeline-block');
  blocks.forEach((block, i) => {
    setTimeout(() => {
      block.style.opacity = '1';
      block.style.transform = 'translateY(0)';
    }, i * 200);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Tab Switching
  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(btn => btn.classList.remove("active"));
      tab.classList.add("active");

      contents.forEach(content => content.classList.remove("active"));
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });

  // Scroll-triggered slow staggered animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const blocks = entry.target.querySelectorAll('.timeline-block');
        blocks.forEach((block, i) => {
          setTimeout(() => {
            block.classList.add('reveal');
          }, i * 500); // Slower stagger: 0.5s delay per block
        });
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, { threshold: 0.25 });

  const section = document.querySelector('.edu-exp-section');
  if (section) {
    observer.observe(section);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.section-title, .section-subtitle, .contact-form');
  elementsToAnimate.forEach(el => observer.observe(el));
});


  document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.section-title, .section-subtitle, .contact-form');
    elementsToAnimate.forEach(el => observer.observe(el));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contactForm.classList.add("reveal");
          observer.unobserve(contactForm);
        }
      });
    }, { threshold: 0.3 });
  
    if (contactForm) observer.observe(contactForm);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.site-footer');
  
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            footer.classList.add('visible');
            observer.unobserve(footer);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    observer.observe(footer);
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotForm = document.getElementById('chatbot-form');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotNavLink = document.getElementById('chatbot-nav-link'); // 🌟
  
    // Toggle button
    chatbotToggle.addEventListener('click', () => {
      chatbotContainer.classList.toggle('hidden');
    });
  
    // Close button
    chatbotClose.addEventListener('click', () => {
      chatbotContainer.classList.add('hidden');
    });
  
    // Navbar link triggers chatbot
    chatbotNavLink.addEventListener('click', (e) => {
      e.preventDefault();
      chatbotContainer.classList.remove('hidden');
      chatbotContainer.scrollIntoView({ behavior: 'smooth' });
    });
  
    // Handle form submission
    chatbotForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const message = chatbotForm.message.value.trim();
      if (!message) return;
  
      // Show user's message
      const userMsg = document.createElement('div');
      userMsg.className = 'message user';
      userMsg.textContent = message;
      chatbotMessages.appendChild(userMsg);
  
      chatbotForm.reset();
  
      // Send via fetch
      fetch("https://formspree.io/f/xzzrdrgg", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ message: message })
      })
      .then(() => {
        const reply = document.createElement('div');
        reply.className = 'message bot';
        reply.textContent = 'Thank you for your message! I will get back to you shortly.';
        chatbotMessages.appendChild(reply);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      })
      .catch(() => {
        const errorMsg = document.createElement('div');
        errorMsg.className = 'message bot';
        errorMsg.textContent = 'Oops! Something went wrong. Please try again later.';
        chatbotMessages.appendChild(errorMsg);
      });
    });
  });

