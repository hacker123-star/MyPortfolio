// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  
  // Animate hamburger icon
  const spans = mobileMenuToggle.querySelectorAll('span');
  if (navMenu.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Close mobile menu when clicking on a menu item
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    const spans = mobileMenuToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Search functionality
const searchBtn = document.querySelector('.btn-search');
const searchInput = document.getElementById('searchInput');
const classModeSelect = document.getElementById('classMode');

searchBtn.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  const mode = classModeSelect.value;
  
  if (searchTerm === '') {
    alert('Please enter a subject to search');
    return;
  }
  
  // In a real application, this would make an API call
  console.log('Searching for:', {
    subject: searchTerm,
    mode: mode
  });
  
  alert(`Searching for "${searchTerm}" tutors${mode ? ' (' + mode + ' classes)' : ''}...\n\nIn a complete implementation, this would show filtered results!`);
});

// Allow Enter key to trigger search
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchBtn.click();
  }
});

// View Profile button functionality
const viewProfileBtns = document.querySelectorAll('.tutor-card .btn-primary');
viewProfileBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const tutorCard = btn.closest('.tutor-card');
    const tutorName = tutorCard.querySelector('h3').textContent;
    
    // In a real application, this would navigate to tutor profile page
    console.log('Viewing profile for:', tutorName);
    alert(`Opening profile for ${tutorName}...\n\nIn a complete implementation, this would show the full tutor profile with:\n- Complete bio\n- Education & experience\n- Reviews & ratings\n- Availability calendar\n- Booking options`);
  });
});

// Hero CTA buttons
const heroBtns = document.querySelectorAll('.hero-buttons .btn-primary, .hero-buttons .btn-secondary');
heroBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.textContent === 'Find a Tutor') {
      document.querySelector('#tutors').scrollIntoView({ behavior: 'smooth' });
    } else if (btn.textContent === 'Become a Tutor') {
      document.querySelector('#become-tutor').scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Register as Tutor button
const registerTutorBtn = document.querySelector('.cta .btn-secondary');
if (registerTutorBtn) {
  registerTutorBtn.addEventListener('click', () => {
    alert('Welcome to TutorConnect!\n\nTutor Registration includes:\n- Profile creation\n- Document verification\n- Subject expertise selection\n- Availability setup\n- Pricing configuration\n\nIn a complete implementation, this would open the registration form!');
  });
}

// Add scroll animation for feature cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe feature cards and tutor cards
const animatedElements = document.querySelectorAll('.feature-card, .tutor-card, .step');
animatedElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Add active state to navigation on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
    
    if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => link.style.color = '');
      navLink.style.color = 'var(--primary-color)';
    }
  });
});

// Simple form validation for search
searchInput.addEventListener('input', () => {
  if (searchInput.value.length > 0) {
    searchInput.style.borderColor = 'var(--secondary-color)';
  } else {
    searchInput.style.borderColor = 'var(--border-color)';
  }
});

console.log('TutorConnect website loaded successfully! ðŸŽ“');
console.log('This is a demo website. In production, you would need to:');
console.log('- Connect to a backend API');
console.log('- Implement authentication system');
console.log('- Add payment gateway integration');
console.log('- Create database for tutors and students');
console.log('- Add video calling functionality');
