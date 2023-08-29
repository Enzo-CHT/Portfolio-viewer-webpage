



showSlide(1);


function showSlide(index) {
    var slides = document.querySelectorAll(".slide");

    console.log(slides);
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[index-1].style.display = "block";
}



