// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle mobile menu visibility
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('header nav');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
    }
});

// Modal functions
function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Event listeners for account buttons
document.getElementById('account-btn').addEventListener('click', () => {
    openModal('login-modal'); // Open login modal for now, you can also add logic to toggle between login and register modals
});

// Handle Login
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const result = await response.json();
    if (result.token) {
        localStorage.setItem('token', result.token);
        alert('Login successful!');
        // Redirect to dashboard or another page
        window.location.href = 'dashboard.html';
    } else {
        alert(result.message);
    }
    closeModal('login-modal');
});

// Handle Registration
document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const surname = document.getElementById('reg-surname').value;
    const email = document.getElementById('reg-email').value;
    const tel = document.getElementById('reg-tel').value;
    const address = document.getElementById('reg-address').value;
    const postcode = document.getElementById('reg-postcode').value;
    const password = document.getElementById('reg-password').value;

    const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, surname, email, tel, address, postcode, password })
    });

    const result = await response.text();
    alert(result);
    closeModal('register-modal');
});

// Social login buttons
document.querySelector('.google-btn').addEventListener('click', () => {
    // Trigger Google sign-in
});

document.querySelector('.apple-btn').addEventListener('click', () => {
    // Trigger Apple sign-in
});

document.querySelector('.facebook-btn').addEventListener('click', () => {
    // Trigger Facebook sign-in
});
