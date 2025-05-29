// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    pl: {
      phone: "Telefon:",
      email: "Email:",
      uslugi: "Usługi",
      onas: "O nas",
      kontakt: "Kontakt",
      heroTitle: "ZAKŁAD USŁUG BUDOWLANYCH",
      heroDesc: "Działamy od 2003 roku",
      servicesTitle: "ZAKRES USŁUG BUDOWLANYCH",
      service1: "Wykończenia wnętrz",
      service2: "Remonty i modernizacja",
      service3: "Montaż instalacji elektrycznych",
      aboutTitle: "O NAS",
      aboutText: "Stanex-Bud to firma z wieloletnim doświadczeniem w branży budowlanej. Zajmujemy się kompleksowymi remontami, wykończeniami wnętrz oraz sprzedażą materiałów budowlanych. Działamy na rynku nieprzerwanie od 1993 roku, oferując usługi najwyższej jakości.",
      contactTitle: "Kontakt",
      formName: "Imię i nazwisko",
      formEmail: "Email",
      formMsg: "Wiadomość",
      formBtn: "Wyślij",
      footer: "&copy; 2025 Dakon-Bud. Wszelkie prawa zastrzeżone."
    },
    en: {
      phone: "Phone:",
      email: "Email:",
      uslugi: "Services",
      onas: "About Us",
      kontakt: "Contact",
      heroTitle: "CONSTRUCTION SERVICES COMPANY",
      heroDesc: "Operating since 2003",
      servicesTitle: "SCOPE OF CONSTRUCTION SERVICES",
      service1: "Interior finishing",
      service2: "Renovations and modernization",
      service3: "Electrical installations",
      aboutTitle: "ABOUT US",
      aboutText: "Stanex-Bud is a company with many years of experience in the construction industry. We provide comprehensive renovations, interior finishing, and sales of building materials. We have been continuously operating on the market since 1993, offering services of the highest quality.",
      contactTitle: "Contact",
      formName: "Full name",
      formEmail: "Email",
      formMsg: "Message",
      formBtn: "Send",
      footer: "&copy; 2025 Dakon-Bud. All rights reserved."
    }
  };

  const langSelect = document.querySelector(".language-select");

  // Funkcja do stosowania tłumaczeń
  function applyTranslations(lang) {
    const t = translations[lang];

    document.getElementById("phone-label").textContent = t.phone;
    document.getElementById("email-label").textContent = t.email;

    document.querySelector('a[href="#uslugi"]').textContent = t.uslugi;
    document.querySelector('a[href="#o-nas"]').textContent = t.onas;
    document.querySelector('a[href="#kontakt"]').textContent = t.kontakt;
    document.getElementById("hero-title").textContent = t.heroTitle;
    document.getElementById("hero-desc").textContent = t.heroDesc;
    document.getElementById("services-title").textContent = t.servicesTitle;
    document.getElementById("service1-title").textContent = t.service1;
    document.getElementById("service2-title").textContent = t.service2;
    document.getElementById("service3-title").textContent = t.service3;
    document.getElementById("about-title").textContent = t.aboutTitle;
    document.getElementById("about-text").textContent = t.aboutText;
    document.getElementById("contact-title").textContent = t.contactTitle;
    document.querySelector(".footer").innerHTML = t.footer;

    document.getElementById("form-name").placeholder = t.formName;
    document.getElementById("form-email").placeholder = t.formEmail;
    document.getElementById("form-msg").placeholder = t.formMsg;
    document.getElementById("form-btn").textContent = t.formBtn;
  }

  // Wywołaj funkcję tłumaczenia podczas ładowania strony, używając aktualnie wybranego języka
  applyTranslations(langSelect.value);

  // Dodaj nasłuchiwanie na zmianę języka
  langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    applyTranslations(lang);
  });
});
