document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Initialize Swiper
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });

    // Theme Toggle Functionality
    const themeToggleBtns = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
    const themeIconDark = document.getElementById('theme-icon-dark');
    const themeIconLight = document.getElementById('theme-icon-light');

    // Check for saved user preference or use system preference
    const savedTheme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    // Apply the initial theme
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        themeIconDark.classList.add('hidden');
        themeIconLight.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        themeIconDark.classList.remove('hidden');
        themeIconLight.classList.add('hidden');
    }

    // Theme toggle event listeners
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');

            if (isDark) {
                themeIconDark.classList.add('hidden');
                themeIconLight.classList.remove('hidden');
            } else {
                themeIconDark.classList.remove('hidden');
                themeIconLight.classList.add('hidden');
            }
        });
    });

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Smooth scrolling for all links with hash
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    // Hide preloader when page is loaded
    window.addEventListener('load', function () {
        const loader = document.getElementById('loader');
        if (loader) {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 300);
            }, 500);
        }
    });

    // Add animation class to elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('[data-aos]');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.classList.add('aos-animate');
            }
        });
    };
    // Fungsi untuk toggle theme
    function toggleTheme() {
        const html = document.documentElement;
        const isDark = html.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcons(isDark);
    }

    // Fungsi update icon
    function updateThemeIcons(isDark) {
        const iconDark = document.getElementById('theme-icon-dark');
        const iconLight = document.getElementById('theme-icon-light');

        if (isDark) {
            iconDark.classList.add('hidden');
            iconLight.classList.remove('hidden');
        } else {
            iconDark.classList.remove('hidden');
            iconLight.classList.add('hidden');
        }
    }

    // Init theme dari local storage atau preferensi sistem
    function initTheme() {
        const preferredTheme = localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

        if (preferredTheme === 'dark') {
            document.documentElement.classList.add('dark');
            updateThemeIcons(true);
        }
    }

    // Event listeners
    document.addEventListener('DOMContentLoaded', () => {
        initTheme();

        const themeToggleBtns = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
        themeToggleBtns.forEach(btn => {
            btn.addEventListener('click', toggleTheme);
        });
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});
emailjs.init('w2r4It2jG5So_TDbd'); // Public Key EmailJS kamu

const form = document.getElementById('contact-form');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Disable tombol dan ubah teks
    submitButton.disabled = true;
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Mengirim...';

    const title = "Pesan Baru dari Website";
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    emailjs.send("service_jejr2c9", "template_2g8e2uz", {
        title: title,
        name: name,
        email: email,
        subject: subject,
        message: message,
        time: new Date().toLocaleString()
    }).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Berhasil!',
            text: 'Pesan Anda telah terkirim.',
            confirmButtonColor: '#16a34a'
        });
        form.reset();
    }).catch((error) => {
        console.error('Gagal mengirim pesan:', error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Terjadi kesalahan saat mengirim pesan.',
            confirmButtonColor: '#dc2626'
        });
    }).finally(() => {
        // Aktifkan kembali tombol submit
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    });
});