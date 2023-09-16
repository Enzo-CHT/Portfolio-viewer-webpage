showSlide();

/**
 * Fonction de changement de slide
 * Cette fonction permet de montrer le slide selectionner
 * @param {*} way : Direction du slide
 */
function showSlide(way = 0) {
  // Ajout d'une fonction de recupération d'info lié au slide ??
  // Lien entre les infos et image ???

  var slides = document.querySelectorAll(".slide");

  var index = 0;
  for (var i = 0; i < slides.length; i++) {
    if (slides[i].id == "show") {
      index = i;
    }
    slides[i].id = "";
  }
  
  var next = index + way;
  if (next > slides.length - 1) {
    next = 0;
  } else if (next < 0) {
    next = slides.length - 1;
  }
  
  for (var i = 0; i < slides.length; i++) {
    // Tous les slides sont des icon par défaut
    
    slides[i].classList.remove("left");
    slides[i].classList.remove("right");
    slides[i].classList.remove("centered");
    slides[i].setAttribute('onclick', 'showInformations('+i+');'); // Add the onclick attribute here
    
    
    if (i < next) {
    
      // Si avant le slide selectionner
      slides[i].classList.add("right");
    } else if (i > next) {

      // Si après le slide selectionner
      slides[i].classList.add("left");
    } else {

      // Si slide selectionner
      slides[next].id = "show"
      slides[next].classList.add("centered");
    }



  }
}

