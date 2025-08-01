async function loadLanguage(lang) {
  try {
    const response = await fetch(`./languages/${lang}.json`);
    const translations = await response.json();
    const elements = document.querySelectorAll('[data-lang]');
    document.documentElement.setAttribute('lang', lang);

    elements.forEach(el => {
      const key = el.getAttribute('data-lang');
      if (translations[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[key];
        } else {
          el.textContent = translations[key].replace(/<br\s*\/?>/gi, '\n');
        }
      }
    });
  } catch (error) {
    console.error(`Failed to load language: ${lang}`, error);
  }
}

document.addEventListener('DOMContentLoaded', function () {
    const select = document.getElementById('lang-select');

    const savedLang = localStorage.getItem('language');
    const defaultLang = navigator.language.slice(0, 2);
    const browserLang = ['en', 'id', 'oid', 'jv', 'su'].includes(defaultLang) ? defaultLang : 'en';

    let initialLang;

    if (!savedLang) {
        // belum pernah di-set, pakai sistem dan simpan sebagai 'system'
        localStorage.setItem('language', 'system');
        initialLang = browserLang;
        select.value = 'system';
    } else if (savedLang === 'system') {
        initialLang = browserLang;
        select.value = 'system';
    } else {
        initialLang = savedLang;
        select.value = savedLang;
    }

    loadLanguage(initialLang);

    select.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        localStorage.setItem('language', selectedLang);

        if (selectedLang === 'system') {
        loadLanguage(browserLang);
        } else {
        loadLanguage(selectedLang);
        }
    });
});




// Navbar Sticky
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const threshold = navbar.getBoundingClientRect();
    if (threshold.top <= 16) {
        navbar.classList.add('top');
    } else {
        navbar.classList.remove('top');
    }
});



// Menubar
document.addEventListener('DOMContentLoaded', function() {
    const menuButtons = document.querySelectorAll('.menuButton');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');

    overlay.addEventListener('click', function () {
        document.documentElement.classList.remove('menu-open');
        
        menu.classList.add('hide');
        
        overlay.classList.add('hide');
    });

    menuButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (menu.classList.contains('hide')) {
                document.documentElement.classList.add('menu-open');
            } else {
                document.documentElement.classList.remove('menu-open');
            }
            menu.classList.toggle('hide');
            overlay.classList.toggle('hide');
        });
    });
});



// Resume File
document.addEventListener('DOMContentLoaded', function () {
    const resumeFiles = document.querySelectorAll('.resume-file');
    const openButtons = document.querySelectorAll('.resume-open-button');
    const closeButtons = document.querySelectorAll('.resume-close-button');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');

    overlay.addEventListener('click', function () {
        document.documentElement.classList.remove('menu-open');
        resumeFiles.forEach(function (file) {
            file.classList.add('hide');
        });
        overlay.classList.add('hide');
    });


    openButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            document.documentElement.classList.add('menu-open');

            resumeFiles.forEach(function (file) {
                file.classList.remove('hide');
            });

            menu.classList.add('hide');
            overlay.classList.remove('hide'); // tampilkan overlay
        });
    });

    closeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            document.documentElement.classList.remove('menu-open');

            resumeFiles.forEach(function (file) {
                file.classList.add('hide');
            });

            overlay.classList.add('hide'); // sembunyikan overlay
        });
    });
    document.getElementById('resume-print').addEventListener('click', function () {
    const iframe = document.getElementById('resume-frame');
        iframe.focus();
        iframe.contentWindow.print();
    });

});








// Load Data Theme
const savedTheme = localStorage.getItem('theme');
document.documentElement.setAttribute('theme', savedTheme);
if (document.documentElement.getAttribute('theme') === 'light') {
    document.documentElement.setAttribute('theme', 'light');
} else {
    document.documentElement.setAttribute('theme', 'dark');
}




// Theme
document.addEventListener('DOMContentLoaded', function () {
    const themeForm = document.getElementById('theme-switch');
    const radios = themeForm.querySelectorAll('input[name="theme"]');
    const toggleButtons = document.querySelectorAll('.theme-toggle');

    function applyTheme(theme) {
        if (theme === 'light') {
            document.documentElement.setAttribute('theme', 'light');
            localStorage.setItem('theme', 'light');
            document.querySelector('.light').classList.remove('hidden');
            document.querySelector('.dark').classList.add('hidden');
            document.querySelector('.light1').classList.remove('hidden');
            document.querySelector('.dark1').classList.add('hidden');
        } else if (theme === 'dark') {
            document.documentElement.setAttribute('theme', 'dark');
            localStorage.setItem('theme', 'dark');
            document.querySelector('.light').classList.add('hidden');
            document.querySelector('.dark').classList.remove('hidden');
            document.querySelector('.light1').classList.add('hidden');
            document.querySelector('.dark1').classList.remove('hidden');
        } else if (theme === 'system') {
            document.documentElement.removeAttribute('theme');
            localStorage.setItem('theme', '');

            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                showDark();
            } else {
                showLight();
            }
        }

        radios.forEach(radio => {
            radio.checked = (radio.value === theme);
        });
    }

    function showLight() {
        document.documentElement.setAttribute('theme', 'light');
        document.querySelector('.light')?.classList.remove('hidden');
        document.querySelector('.dark')?.classList.add('hidden');
        document.querySelector('.light1')?.classList.remove('hidden');
        document.querySelector('.dark1')?.classList.add('hidden');
    }

    function showDark() {
        document.documentElement.setAttribute('theme', 'dark');
        document.querySelector('.light')?.classList.add('hidden');
        document.querySelector('.dark')?.classList.remove('hidden');
        document.querySelector('.light1')?.classList.add('hidden');
        document.querySelector('.dark1')?.classList.remove('hidden');
    }


    themeForm.addEventListener('change', function () {
        const selected = document.querySelector('input[name="theme"]:checked');
        if (selected) {
            applyTheme(selected.value);
        }
    });

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            let current = localStorage.getItem('theme') || 'system';
            let next;

            if (current === 'dark') next = 'light';
            else next = 'dark';

            applyTheme(next);
        });
    });

    let initial = localStorage.getItem('theme') || 'system';
    applyTheme(initial);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const savedTheme = localStorage.getItem('theme') || 'system';
        if (savedTheme === '' || savedTheme === 'system') {
            applyTheme('system');
        }
    });

});





// EmailJS
function sendMail () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let activeLang = document.documentElement.lang || 'en';

    const translations = {
    en: {
        empty: 'Forms cannot be empty!',
        sendNow: 'Send Now'
    },
    id: {
        empty: 'Pesan tidak boleh kosong!',
        sendNow: 'Kirim Sekarang'
    },
    oid: {
        empty: 'Pesan tidak boleh kosong!',
        sendNow: 'Kirim Sekarang'
    },
    jv: {
        empty: 'Pesen mboten kepareng kosong.', 
        sendNow: 'Kintun Samenika'
    },
    su: {
        empty: 'Pesen teu tiasa kosong!',
        sendNow: 'Kirim Ayeuna'
    }
    };

    if (!name || !email || !message) {
        const submitBtn = document.getElementById('submit');
        submitBtn.style.backgroundColor = 'var(--error)';
        submitBtn.textContent = translations[activeLang].empty;

        setTimeout(() => {
            submitBtn.style = '';
            submitBtn.innerHTML = `${translations[activeLang].sendNow}<svg width="1000" height="1000" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="954.669" y="500.116" width="500" height="143" rx="71.5" transform="rotate(135 954.669 500.116)" fill="var(--content-color)"/><rect x="601.116" y="146" width="500" height="143" rx="71.5" transform="rotate(45 601.116 146)" fill="var(--content-color)"/><rect x="128" y="428" width="744" height="143" rx="64" fill="var(--content-color)"/></svg>`;
        }, 3000);
        return false;
    }


    let messages = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        message : document.getElementById('message').value
    };

    document.getElementById('form-done').style = 'visibility: visible; opacity: 1;';
    document.getElementById('contact-form').style = 'opacity: 0;';
    emailjs.send('Ahmadrka.com','Ahmadrka.com',messages);
}

// Send Another Message
function sendAnother () {
    document.getElementById('form-done').style = 'visibility: hidden; opacity: 0;';
    document.getElementById('contact-form').style = 'opacity: 1;';
    document.getElementById('contact-form').reset();
};



// Coming Soon
function dev () {alert('Sorry, this feature is coming soon.')};



// Background
document.addEventListener('DOMContentLoaded', function () {
    const colorPicker = document.getElementById('color-picker');
    const imageInput = document.getElementById('background-image');
    const resetButton = document.getElementById('resetbg');

    const savedColor = localStorage.getItem('background-color');
    const savedImage = localStorage.getItem('background-image');

    if (savedImage) {
        document.body.style.backgroundImage = `url(${savedImage})`;
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';
        document.getElementById('colorbg').style.backgroundColor = 'var(--hover-color)';
        document.getElementById('imagebg').style.backgroundColor = 'var(--button-color)';
        document.getElementById('resetbg').style.backgroundColor = 'var(--hover-color)';
    } else if (savedColor) {
        document.documentElement.style.setProperty('--background-body', savedColor);
        document.body.style.backgroundImage = 'none';
        document.getElementById('colorbg').style.backgroundColor = 'var(--button-color)';
        document.getElementById('imagebg').style.backgroundColor = 'var(--hover-color)';
        document.getElementById('resetbg').style.backgroundColor = 'var(--hover-color)';
        colorPicker.value = savedColor;
    } else {
        document.getElementById('resetbg').style.backgroundColor = 'var(--button-color)';
    }

    colorPicker.addEventListener('change', function () {
        const newColor = this.value;
        document.documentElement.style.setProperty('--background-body', newColor);
        document.body.style.backgroundImage = 'none';

        localStorage.setItem('background-color', newColor);
        localStorage.removeItem('background-image');

        document.getElementById('colorbg').style.backgroundColor = 'var(--button-color)';
        document.getElementById('imagebg').style.backgroundColor = 'var(--hover-color)';
        document.getElementById('resetbg').style.backgroundColor = 'var(--hover-color)';
    });

    imageInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const imageUrl = e.target.result;

                try {
                    localStorage.setItem('background-image', imageUrl);
                    localStorage.removeItem('background-color');

                    document.body.style.backgroundImage = `url(${imageUrl})`;
                    document.body.style.backgroundRepeat = 'no-repeat';
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundPosition = 'center';
                    document.body.style.backgroundAttachment = 'fixed';

                    document.getElementById('colorbg').style.backgroundColor = 'var(--hover-color)';
                    document.getElementById('imagebg').style.backgroundColor = 'var(--button-color)';
                    document.getElementById('resetbg').style.backgroundColor = 'var(--hover-color)';
                } catch (error) {
                    document.getElementById('notifications').classList.remove('hide');
                    document.getElementById('image-error').classList.remove('hide');
                    console.log('Sorry, This Image Size is Too Large (Max 5MB)', error);
                    setTimeout(() => {
                        document.getElementById('notifications').classList.add('hide');
                        document.getElementById('image-error').classList.add('hide');
                    },3000)
                }
            };

            reader.readAsDataURL(file);
        } else {
            alert('File yang dipilih bukan gambar.');
        }
    });

    resetButton.addEventListener('click', function () {
        document.documentElement.style.removeProperty('--background-body');
        document.body.style.backgroundImage = 'none';

        localStorage.removeItem('background-color');
        localStorage.removeItem('background-image');

        document.getElementById('colorbg').style.backgroundColor = 'var(--hover-color)';
        document.getElementById('imagebg').style.backgroundColor = 'var(--hover-color)';
        document.getElementById('resetbg').style.backgroundColor = 'var(--button-color)';
    });
});


// // HEX to HSL Converter
// function hexToHsl(hex) {
//     hex = hex.replace('#', '');
//     let r = parseInt(hex.substring(0, 2), 16) / 255;
//     let g = parseInt(hex.substring(2, 4), 16) / 255;
//     let b = parseInt(hex.substring(4, 6), 16) / 255;

//     let max = Math.max(r, g, b), min = Math.min(r, g, b);
//     let h, s, l = (max + min) / 2;

//     if (max === min) {
//         h = s = 0; // achromatic
//     } else {
//         let d = max - min;
//         s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
//         switch (max) {
//             case r: h = (g - b) / d + (g < b ? 6 : 0); break;
//             case g: h = (b - r) / d + 2; break;
//             case b: h = (r - g) / d + 4; break;
//         }
//         h /= 6;
//     }

//     return {
//         h: Math.round(h * 360),
//         s: Math.round(s * 100),
//         l: Math.round(l * 100)
//     };
// }

// // HSL to HEX Converter
// function hslToHex(h, s, l) {
//     s /= 100;
//     l /= 100;

//     const c = (1 - Math.abs(2 * l - 1)) * s;
//     const x = c * (1 - Math.abs((h / 60) % 2 - 1));
//     const m = l - c / 2;

//     let r = 0, g = 0, b = 0;

//     if (h < 60)      { r = c; g = x; b = 0; }
//     else if (h < 120){ r = x; g = c; b = 0; }
//     else if (h < 180){ r = 0; g = c; b = x; }
//     else if (h < 240){ r = 0; g = x; b = c; }
//     else if (h < 300){ r = x; g = 0; b = c; }
//     else             { r = c; g = 0; b = x; }

//     r = Math.round((r + m) * 255).toString(16).padStart(2, '0');
//     g = Math.round((g + m) * 255).toString(16).padStart(2, '0');
//     b = Math.round((b + m) * 255).toString(16).padStart(2, '0');

//     return `#${r}${g}${b}`;
// }

// function convertBackgroundToButtonColor(hexBgColor) {
//     const hsl = hexToHsl(hexBgColor);
//     const newS = 90;
//     const newL = 60;
//     return hslToHex(hsl.h, newS, newL);
// }


// const background = '#add0ff'; // warna background
// const buttonColor = convertBackgroundToButtonColor(background);
// console.log('Warna tombol:', buttonColor);
// function setThemeLightButtonColor(color) {
//     let styleTag = document.getElementById('dynamic-theme-style');

//     if (!styleTag) {
//         styleTag = document.createElement('style');
//         styleTag.id = 'dynamic-theme-style';
//         document.head.appendChild(styleTag);
//     }

//     styleTag.textContent = `
//         [theme="light"] {
//             --button-color: ${color};
//         }
//     `;
// }
// setThemeLightButtonColor(buttonColor);
