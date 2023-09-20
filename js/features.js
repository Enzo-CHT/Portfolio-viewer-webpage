/**
 * Fonction d'ajout des images dans la section gallery
 */
function fillGallery(data) {
  data.forEach((element) => {
    var gallery = document.getElementById("gallery");

    gallery.innerHTML += "<img class='slide' src='" + element["img"] + "'/>";
  });
}



/**
 * Fonction associative informations - Illustrations
 * @param index Index of the image you want to display
 */
function showInformations(index) {
  const project = publicData[index];
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
