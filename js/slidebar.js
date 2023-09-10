showSlide();

/**
 * Fonction de changement de slide
 * Cette fonction permet de montrer le slide selectionner
 * @param {*} way : Direction du slide
 */
function showSlide(way = 0) {
  // Ajout d'une fonction de recupération d'info lié au slide ??
  // Lien entre les infos et image ???

  var slides = document.querySelectorAll(".slide,.icon-slide");

  var index = 0;
  for (var i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("slide")) {
      index = i;
    }
  }

  var next = index + way;
  if (next > slides.length - 1) {
    next = 0;
  } else if (next < 0) {
    next = slides.length - 1;
  }

  for (var i = 0; i < slides.length; i++) {
    // Tous les slides sont des icon par défaut
    slides[i].classList.remove("slide");
    slides[i].classList.remove("left");
    slides[i].classList.remove("right");
    slides[i].classList.remove("centered");
    slides[i].classList.add("icon-slide");

    if (i < next) {
      // Si avant le slide selectionner
      slides[i].classList.add("right");
    } else if (i > next) {
      // Si après le slide selectionner
      slides[i].classList.add("left");
    } else {
      // Si slide selectionner
      slides[next].classList.remove("icon-slide");
      slides[next].classList.add("slide");
      slides[next].classList.add("centered");
    }
  }
}

// Affiche les infos lié a l'image  ???
function updateView(index) {}
