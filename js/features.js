/**
 * Fonction d'ajout des images dans la section gallery
 */
function fillGallery(data) {
  let cpt = 0;
  data.forEach((element) => {
    var gallery = document.getElementById("gallery");

    gallery.innerHTML += "<img id=" + cpt + " class='slide' src='" + element["img"] + "' />";

    // Don't work 
    // Ajout d'une icone sur les liens
    element['links'].forEach((value, name) => {
      switch (name) {
        case "github":
          document.getElementById(cpt).style.backgroundImage = "url(../icons/github.png)";
          break;
        default:
          document.getElementById(cpt).style.backgroundImage = "url(../icons/github.png)";
          break;

      }
    });
    ///

    cpt++;
  });
}




/**
 * Fonction associative informations - Illustrations
 * @param index Index of the image you want to display
 */
function showInformations(project) {

  document.getElementById("image-selected-project").src = project["img"];
  document.getElementById("title-selected-project").innerHTML =
    project["title"];
  document.getElementById("description-selected-project").innerHTML =
    project["description"];

  const linksObject = project["links"];
  const linksListElement = document.getElementById("links-list");
  linksListElement.innerHTML = "";

  for (const name in linksObject) {
    if (linksObject.hasOwnProperty(name)) {
      const value = linksObject[name];
      const link =
        "<li class='links-element'><a href='" + value + "'>" + name + "</a></li>";
      linksListElement.innerHTML += link;
    }
  }

}
