/**
 * Fonction d'ajout des images dans la section gallery
 */
function fillGallery(data) {
  let cpt = 0;
  data.forEach((element) => {

    var gallery = document.getElementById("gallery");

    // Create a new image element
    var imgElement = document.createElement("img");
    imgElement.id = cpt;  // Set a unique ID for each image
    imgElement.className = "slide";
    imgElement.src = element["img"];

    gallery.appendChild(imgElement);

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

  // Listes des liens lié au projet
  const linksObject = project["links"];

  // Partie listant les liens sur la page
  const linksListElement = document.getElementById("links-list");
  linksListElement.innerHTML = "";

  for (const name in linksObject) {
    if (linksObject.hasOwnProperty(name)) {
      const value = linksObject[name];


      var icon = "icons\\default.png"

      // Choisi l'icon en foncton du nom (sensible à la casse)
      switch (name) {
        case "github":
          icon = "icons\\github.png"
          break;


      }


      const link =
        "<a class='links-element' href='" + value + "' > <img class=icon src='" + icon + "'  alt ='" + name + "'/></a>";
      linksListElement.innerHTML += link;
    }
  }

}
