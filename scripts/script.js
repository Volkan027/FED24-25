// JavaScript Document
console.log("hi");

/* Zorgt ervoor dat hamburger menu open en dicht gaat, met hulp van w3schools.com*/
function hamburger() {
  const hamburger = document.getElementById("myLinks");
  /* Controleer of het menu momenteel zichtbaar is */
  if (hamburger.style.display === "block") {
    /* Als het zichtbaar is, verberg het dan */
    hamburger.style.display = "none";
  } else {
    /* Als het niet zichtbaar is, maak het dan zichtbaar */
    hamburger.style.display = "block";
  }
}





/*dark en light mode en halloween mode voor de pagina met behulp van chatgpt*/
document.querySelector('.theme-toggle').addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');

  // Schakel tussen de thema's
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelector('.theme-toggle').textContent = 'Wissel naar Dark Mode';
  } else if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'halloween');
    document.querySelector('.theme-toggle').textContent = 'Wissel naar Light Mode';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.querySelector('.theme-toggle').textContent = 'Wissel naar Halloween Mode';
  }
});





/*top paarse banner die switched van tekst, gemaakt met behulp van chatgpt */

const texts = [
  "All NZXT PCs are assembled with care in Germany.",
  "Prebuilt and custom PCs built in 2 working days."
];

let currentIndex = 0;
const boventekst = document.querySelector('.boventekst');

setInterval(() => {
  // Verschuif de tekst naar links
  boventekst.style.transform = 'translateX(-100%)';

  // Na 0.5 seconden (de duur van de animatie) verander de tekst
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % texts.length; // Update de index
    boventekst.textContent = texts[currentIndex]; // Wijzig de tekst

    // Zet de overgang weer aan en verspring naar de oorspronkelijke positie
    boventekst.style.transition = 'transform 0.5s ease'; // Heractiveer de overgang
    boventekst.style.transform = 'translateX(0)'; // Terug naar de oorspronkelijke positie
  }, 500); // Deze tijd moet overeenkomen met de animatieduur
}, 5000);









/*pop-up voor hulp*/
function openPopup() {
  document.getElementById("chatPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("chatPopup").style.display = "none";
}




/*video afspelen*/

const video = document.querySelector('.video-speler');
const videoknop = document.querySelector('.knop-video');

videoknop.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});



/* font formaat wijzigen */

document.addEventListener("DOMContentLoaded", () => {
  const fontSizeKnop = document.querySelector('.font-size-verander');

  /* Voegt een klik event listener toe aan de knop */
  fontSizeKnop.addEventListener('click', () => {

    const newSize = '115%'; // Je kunt dit aanpassen naar de gewenste grootte

    // Selecteer alle elementen waarvan je de lettergrootte wilt veranderen
    const elements = document.querySelectorAll('body, h1, h2, h3, h4, h5, h6, p, a');

    // Loop door elk element en verander de lettergrootte
    elements.forEach(element => {
      element.style.fontSize = newSize;
    });
  });
});


/* de onclicks in mijn html heb ik met een reden gedaan */
/* ik heb hulp gehad van chatgpt om mijn code ook te controleren, tekens etc. */