// On commence par créer deux variables JavaScript,
// pour sélectionner chacune un des deux boutons (light et dark)
const toggleDarkModeBtn = document.querySelector("#dark-mode-btn");
const toggleLightModeBtn = document.querySelector("#light-mode-btn");

// Clic sur "Dark mode" → passage au thème sombre
toggleDarkModeBtn.addEventListener("click", function () {
  // Lors du clic sur le bouton "Dark mode", nous voulons que
  // l'attribut data-theme de la balise <html> prenne pour valeur "dark"
  document.querySelector("html").setAttribute("data-theme", "dark");
});

// Clic sur "Light mode" → passage au thème clair
toggleLightModeBtn.addEventListener("click", function () {
  // Lors du clic sur le bouton "Light mode", nous voulons que
  // l'attribut data-theme de la balise <html> prenne pour valeur "light"
  document.querySelector("html").setAttribute("data-theme", "light");
});

const cards = document.querySelectorAll(".pantheons-card");
const filters = document.querySelectorAll("input[name='type']");

filters.forEach((filter) => {
  filter.addEventListener("click", function () {
    const value = filter.value; // Récupère la valeur du filtre cliqué

    cards.forEach((card) => {
      const type = card.getAttribute("data-type"); // Récupère la catégorie de la carte

      if (value === "") {
        // Si "Tous" est sélectionné (value vide)
        card.classList.remove("hide");
      } else {
        // Sinon, comparer avec la catégorie de la carte
        if (type === value) {
          card.classList.remove("hide"); // Montrer
        } else {
          card.classList.add("hide"); // Cacher
        }
      }
    });
  });
});
