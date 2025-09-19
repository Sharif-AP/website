// Dark mode toggle and save preference
const toggleDarkModeBtn = document.getElementById('darkModeToggle');
const langSelect = document.getElementById('languageSelect');

function setDarkMode(isDark) {
    if (isDark) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDark);
}

toggleDarkModeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark');
    setDarkMode(!isDark);
});

// Load dark mode preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const darkModePref = localStorage.getItem('darkMode') === 'true';
    setDarkMode(darkModePref);

    // Load language preference
    const savedLang = localStorage.getItem('lang') || 'en';
    langSelect.value = savedLang;
    setLanguage(savedLang);
});

// Language translation dictionary (sample, you can expand)
const translations = {
    en: {
        home: 'Home',
        courseMaterials: 'Course Materials',
        aboutUs: 'About Us',
        projects: 'Projects',
        otherYears: 'Other Years',
        welcomeMessage: 'Welcome to the Sharif University of Technology Course Website!',
        description: 'This site provides resources and information for your courses.',
    },
    es: {
        home: 'Inicio',
        courseMaterials: 'Materiales del Curso',
        aboutUs: 'Sobre Nosotros',
        projects: 'Proyectos',
        otherYears: 'Otros Años',
        welcomeMessage: '¡Bienvenido al sitio web del curso de Sharif Universidad de Tecnología!',
        description: 'Este sitio proporciona recursos e información para tus cursos.',
    },
    fr: {
        home: 'Accueil',
        courseMaterials: 'Matériel du cours',
        aboutUs: 'À propos de nous',
        projects: 'Projets',
        otherYears: 'Autres années',
        welcomeMessage: 'Bienvenue sur le site du cours de l\'Université de Technologie Sharif!',
        description: 'Ce site fournit des ressources et des informations pour vos cours.',
    },
    // Add 7 more languages here, e.g. de, ru, zh, ar, pt, it, ja
};

// Add language support for more languages below
// (example with just English, Spanish, French)

function setLanguage(lang) {
    if (!translations[lang]) lang = 'en'; // fallback

    // Translate nav links
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    localStorage.setItem('lang', lang);
}

langSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
});
