// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener('DOMContentLoaded', () => {
  const langButton = document.querySelector('.lang__button');
  const langElement = document.querySelector('.lang');

  langButton.addEventListener('click', () => {
      langElement.classList.toggle('_lng-open');
  });
});
