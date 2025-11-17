const translations = {
  en: {
    name: "PSHacks (Andrew)",
    subtitle: "Full-stack developer, game mechanics & clean UI lover",
    
    "mine-title": "Minesweeper",
    "mine-desc": "Classic Minesweeper clone recreated in JS.",

    "rust-title": "Rust Genetics",
    "rust-desc": "Tool for computing plant genetics in Rust.",

    "sched-title": "Schedule Mixer",
    "sched-desc": "Utility for mixing and analyzing game elements.",

    "wow-title": "Words of Wonders Bot",
    "wow-desc": "Simple Telegram bot for game named Words of Wonders🎮.",

    "about-title": "About me",
    "about-text1": "I am Andrew (@PSHacks), a full-stack developer. I love game mechanics, reverse engineering, and building intuitive applications with clean UI.",
    "about-text2": "Main skills: HTML, CSS, JS, Python, Rust, C#, C++, Delphi.",
    "skills-title": "Skills",
    "contact-title": "Contact"
  },
  ru: {
    name: "PSHacks (Andrew)",
    subtitle: "Full-stack разработчик, люблю гейм-дизайн и чистый UI",
    
    "mine-title": "Сапёр",
    "mine-desc": "Клон классического сапёра, полностью на JS.",

    "rust-title": "Rust Genetics",
    "rust-desc": "Инструмент расчёта генетики растений в Rust.",

    "sched-title": "Schedule Mixer",
    "sched-desc": "Утилита для смешивания игровых элементов.",

    "wow-title": "Words of Wonders Bot",
    "wow-desc": "Простой Telegram бот для игры Words of Wonders🎮.",

    "about-title": "Обо мне",
    "about-text1": "Я — Andrew (@PSHacks), full-stack разработчик. Люблю гейм-механики, реверс-инжиниринг и создавать удобные инструменты с чистым UI.",
    "about-text2": "Основные технологии: HTML, CSS, JS, Python, Rust, C#, C++, Delphi.",
    "skills-title": "Навыки",
    "contact-title": "Контакты"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
