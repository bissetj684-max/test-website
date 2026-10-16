// Zakładki w menu
const tabs = document.querySelectorAll('.tabs button');
const panels = document.querySelectorAll('.panel');

tabs.forEach((button) => {
  button.addEventListener('click', () => {
    tabs.forEach((tab) => tab.setAttribute('aria-selected', tab === button));
    panels.forEach((panel) => {
      panel.hidden = panel.id !== button.dataset.tab;
    });
  });
});

// Przełączanie logo w hero (poziome <-> okrągłe)
const logoToggle = document.querySelector('.logo-toggle');

logoToggle.addEventListener('click', () => {
  logoToggle.querySelectorAll('img').forEach((img) => {
    img.hidden = !img.hidden;
  });
});
