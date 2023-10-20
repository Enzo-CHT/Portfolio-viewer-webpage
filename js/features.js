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


  // Remplissage des catégories 
  const categoriesObject = project['categories'];
  const containerCategories = document.getElementById("container-categories");
  containerCategories.innerHTML = ""; //Vide s'il en existe déjà

  var stack = Array(); // Tableau des couleurs déjà utilisés
  for (const name in categoriesObject) {
    if (categoriesObject.hasOwnProperty(name)) {
      ///
      // Construction d'une catégorie
      ///

      const percentVariable = categoriesObject[name];
      const percentageInPixel = (percentVariable / 100) * 250;
      const hexCharacters = ['orange', 'blue', 'yellow', 'red', 'cyan', 'purple', 'green'];

      // Sélection de la couleur pour la catégorie en construction
      var hexColor = "";
      do {
        hexColor = hexCharacters[Math.floor(Math.random() * hexCharacters.length)];
      } while ((stack.includes(hexColor)))
      stack.push(hexColor); // Ajout aux couleurs déjà utilisés

      // Création de la balise <li>
      var line = document.createElement("li");

      // Ajout de la légende 
      var legend = document.createElement("span");
      legend.className = "legend";
      legend.innerHTML = name;
      legend.style.backgroundColor = hexColor;
      line.appendChild(legend);

      // Ajout du la barre de progession
      var percentBar = document.createElement("span");
      percentBar.className = "percent-bar";
      percentBar.style.width = percentageInPixel + "px";


      percentBar.style.backgroundColor = hexColor;

      // Affichage du pouventage devant la barre 
      var percentValue = document.createElement("span");
      percentValue.innerHTML = percentVariable + "%";
      percentValue.style.color = "black";
      percentValue.style.position = "relative";
      percentValue.style.top = "-8px";
      percentValue.style.left = "-45px";

      percentBar.appendChild(percentValue);

      line.appendChild(percentBar);

      containerCategories.appendChild(line);
      // Fin création balise <li>

    }
  }

}


