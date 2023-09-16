<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/gallery.css" />
  <link rel="stylesheet" href="css/viewpoint.css" />
</head>

<body>
  <main>
    <div>
      <section id="gallery" class="img-container img-container-width"></section>
      <input type="button" name="" id="prevBtn" onclick="showSlide(-1)" value="<" />
      <input type="button" name="" id="nextBtn" onclick="showSlide(1)" value=">" />
    </div>
    <section id="infos" class="view view-width">
      <div>
        <img class="illustration" src="" alt="image-selected-project" id="image-selected-project" />
      </div>
      <div>
        <h3 id="title-selected-project"></h3>
        <p id="description-selected-project"></p>
        <div>
          <ul class="links-list">

          </ul>
        </div>
      </div>

    </section>
  </main>
</body>

<script type="text/javascript">
  var publicData = // Récupération des infos liés aux projets
    <?php
    $dir = scandir("projects/");
    $response = array();
    for ($i = 2; $i < sizeof($dir); $i++) {
      $uri = "projects/" . $dir[$i];
      $json_data = file_get_contents($uri . "/infos.json");
      $response[] = json_decode($json_data, true);
    }

    print_r(json_encode($response));
    ?>;


  fillGallery(publicData);

  /**
   * Fonction d'ajout des images dans la section gallery 
   */
  function fillGallery(data) {
    data.forEach((element) => {
      var gallery = document.getElementById("gallery");
      //var view = document.getElementById("view");

      gallery.innerHTML +=
        "<img class='slide' src='" + element["img"] + "'/>";
    });
  }

  showInformations(0)

  function showInformations(index) {

    const project = publicData[index];
    document.getElementById('image-selected-project').src = project['img'];
    document.getElementById('title-selected-project').innerHTML = project['title'];
    document.getElementById('description-selected-project').innerHTML = project['description'];

    const linksObject = project['links'];
    const linksListElement = document.getElementById('links-list');
   
    for (const name in linksObject) {
      if (linksObject.hasOwnProperty(name)) {
        const value = linksObject[name];
        const link = "<li class='links-element'><a href='${value}'>${name}</a></li>";
        linksListElement.innerHTML += link;
      }
    }

   

  }
</script>
<script src="js/slidebar.js"></script>

</html>