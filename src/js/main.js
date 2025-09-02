const cards = document.querySelectorAll(".card");
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
