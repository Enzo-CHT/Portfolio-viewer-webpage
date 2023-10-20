

/**
 * Fonction de changement de slide
 * Cette fonction permet de montrer le slide selectionner
 * @param {*} way : Direction du slide
 */
function showSlide(way = 0, projects) {


  var slides = document.querySelectorAll(".slide");
  var container = document.querySelector(".img-container");

  var index = 0;
  for (var i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("show")) {
      index = i;
    }
    slides[i].classList.remove("show");

  }

  var next = index + way;
  if (next > slides.length - 1) {
    next = 0;
  } else if (next < 0) {
    next = slides.length - 1;
  }

  for (var i = 0; i < slides.length; i++) {

    slides[i].classList.remove("left");
    slides[i].classList.remove("right");
    slides[i].classList.remove("centered");
    slides[i].setAttribute('onclick', 'showSelectedSlide(this.id, publicData)'); // Add the onclick attribute here


    if (i < next) {

      // Si avant le slide selectionner
      slides[i].classList.add("right");
    } else if (i > next) {

      // Si après le slide selectionner
      slides[i].classList.add("left");
    } else {

      // Si slide selectionner
      slides[next].classList.add("show");
      slides[next].classList.add("centered");
      showInformations(projects[next]);

      // Calcul la position de l'image sélectionné 
      var slideWidth = slides[next].offsetWidth;
      var containerWidth = container.offsetWidth;
     
      var scrollLeft = (next * slideWidth) - (containerWidth / 2) + (slideWidth / 2);

      // Scroll vers l'image
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth"
      });

    }



  }

}




/**
 * Fonction d'affichage de l'image selectionner par l'utilisateur
 * @param {*} index : index de l'image
 * @param {*} projects : array des projects 
 */
function showSelectedSlide(index, projects) {
  var slides = document.querySelectorAll(".slide");
  var container = document.querySelector(".img-container");


  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("show");
  }

  for (var i = 0; i < slides.length; i++) {


    slides[i].classList.remove("left");
    slides[i].classList.remove("right");
    slides[i].classList.remove("centered");

    if (i < index) {
      // Si avant le slide selectionner
      slides[i].classList.add("right");
    } else if (i > index) {
      // Si après le slide selectionner
      slides[i].classList.add("left");
    } else {
      // Si slide selectionner

      slides[index].classList.add("show");
      slides[index].classList.add("centered");
      showInformations(projects[index]);

      
      // Calcul la position de l'image sélectionné 
      var slideWidth = slides[index].offsetWidth;
      var containerWidth = container.offsetWidth;
      
      var scrollLeft = (index * slideWidth) - (containerWidth / 2) + (slideWidth / 2);

      // Scroll vers l'image
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth"
      });
    }



  }

}


