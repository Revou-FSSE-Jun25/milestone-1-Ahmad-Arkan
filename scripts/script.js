// Navbar
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const threshold = 625; // Scroll Measure
    
    // 
    window.addEventListener('scroll', function() {
        if (window.scrollY >= threshold) {
            navbar.classList.add('top');
        } else {
            navbar.classList.remove('top');
        }
    });

});

// Menubar
document.addEventListener('DOMContentLoaded', function() {
    const menuButtons = document.querySelectorAll('.menuButton');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');

    menuButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (menu.classList.contains('hide')) {
                document.body.classList.add('menu-open');
            } else {
                document.body.classList.remove('menu-open');
            }
            menu.classList.toggle('hide');
            overlay.classList.toggle('hide');
        });
    });
});

// Load Data Theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('theme', savedTheme);
    if (document.documentElement.getAttribute('theme') === 'light') {
        document.documentElement.setAttribute('theme', 'light');
    } else {
        document.documentElement.setAttribute('theme', 'dark');
    }
} else {
    // System
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('theme', 'light');
    }
}

// Theme
function toggle () {
    if (document.documentElement.getAttribute('theme') === 'dark') {
        document.documentElement.setAttribute('theme', 'light');
        localStorage.setItem('theme', 'light');
        document.querySelector('.light').classList.remove('hidden');
        document.querySelector('.dark').classList.add('hidden');
        document.querySelector('.light1').classList.remove('hidden');
        document.querySelector('.dark1').classList.add('hidden');
    } else {
        document.documentElement.setAttribute('theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.querySelector('.light').classList.add('hidden');
        document.querySelector('.dark').classList.remove('hidden');
        document.querySelector('.light1').classList.add('hidden');
        document.querySelector('.dark1').classList.remove('hidden');
        
    }
}

// EmailJS
function sendMail () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
        document.getElementById('submit').style.backgroundColor = 'var(--error)'
        document.getElementById('submit').innerHTML = 'Forms cannot be empty!'
        setTimeout(() => {
            document.getElementById("submit").style = ''
            document.getElementById('submit').innerHTML = 'Send Now<svg width="1000" height="1000" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="954.669" y="500.116" width="500" height="143" rx="71.5" transform="rotate(135 954.669 500.116)" fill="var(--content-color)"/><rect x="601.116" y="146" width="500" height="143" rx="71.5" transform="rotate(45 601.116 146)" fill="var(--content-color)"/><rect x="128" y="428" width="744" height="143" rx="64" fill="var(--content-color)"/></svg>'
        }, 3000);
        return false;
    };

    let messages = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        message : document.getElementById('message').value
    };

    document.getElementById('form-done').style = 'visibility: visible; opacity: 1;';
    document.getElementById('contact-form').style = 'opacity: 0;';
    emailjs.send('Ahmadrka.com','Ahmadrka.com',messages);
}

function sendAnother () {
    document.getElementById('form-done').style = 'visibility: hidden; opacity: 0;';
    document.getElementById('contact-form').style = 'opacity: 1;';
    document.getElementById('contact-form').reset();
};

// Coming Soon
function dev () {alert('Sorry, this feature is coming soon.')};