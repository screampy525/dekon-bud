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
      btn: "Skontaktuj się",
      heroTitle: "ZAKŁAD USŁUG BUDOWLANYCH",
      heroDesc: "Działamy od 2003 roku",
      servicesTitle: "KOMPLEKSOWE USŁUGI REMONTOWE",
      aboutTitle: "O NAS",
      aboutText: "Stanex-Bud to firma z wieloletnim doświadczeniem...",
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
      btn: "Contact Us",
      heroTitle: "CONSTRUCTION SERVICES COMPANY",
      heroDesc: "Operating since 2003",
      servicesTitle: "COMPREHENSIVE RENOVATION SERVICES",
      aboutTitle: "ABOUT US",
      aboutText: "Stanex-Bud is a company with many years of experience...",
      contactTitle: "Contact",
      formName: "Full name",
      formEmail: "Email",
      formMsg: "Message",
      formBtn: "Send",
      footer: "&copy; 2025 Dakon-Bud. All rights reserved."
    }
  };

  const langSelect = document.querySelector(".language-select");
  langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    const t = translations[lang];

    document.querySelector("#phone-text").childNodes[1].nodeValue = " " + t.phone + " ";
    document.querySelector("#email-text").childNodes[1].nodeValue = " " + t.email + " ";
    document.querySelector('a[href="#uslugi"]').textContent = t.uslugi;
    document.querySelector('a[href="#o-nas"]').textContent = t.onas;
    document.querySelector('a[href="#kontakt"]').textContent = t.kontakt;
    document.querySelector(".btn").textContent = t.btn;
    document.querySelector(".hero h2").textContent = t.heroTitle;
    document.querySelector(".hero p").textContent = t.heroDesc;
    document.querySelector("#uslugi h2").textContent = t.servicesTitle;
    document.querySelector("#o-nas h2").textContent = t.aboutTitle;
    document.querySelector("#o-nas p").textContent = t.aboutText;
    document.querySelector("#kontakt h2").textContent = t.contactTitle;
    document.querySelector(".footer").innerHTML = t.footer

    const inputs = document.querySelectorAll("form input, form textarea");
    inputs[0].placeholder = t.formName;
    inputs[1].placeholder = t.formEmail;
    inputs[2].placeholder = t.formMsg;
    document.querySelector("form button").textContent = t.formBtn;
  });
});
