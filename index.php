<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <link rel="stylesheet" href="css/style.css" />
</head>

<body>
  <main>
    <section id="gallery"></section>
    <input type="button" name="" id="" onclick="showSlide(-1)" value="<" />
    <input type="button" name="" id="" onclick="showSlide(1)" value=">" />
    <section id="view">
      <!--
      <div>
        <img src="" alt="image-selected-project" id="image-selected-project" />
      </div>
      <div>
        <h3 id="title-selected-project"></h3>
        <p id="description-selected-project"></p>
        <div>
          <ul class="links-list">
            <li class="links-element"><a href="#">Github</a></li>
          </ul>
        </div>
      </div>
-->
    </section>
  </main>
</body>

<script>
  fillGallery(
    // Récupération des infos liés aux projets
    <?php
    $dir = scandir("projects/");
    $response = array();
    for ($i = 2; $i < sizeof($dir); $i++) {
      $uri = "projects/" . $dir[$i];
      $json_data = file_get_contents($uri . "/infos.json");
      $response[] = json_decode($json_data, true);
    }

    print_r(json_encode($response));
    ?>
  );

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
</script>
<script src="js/slidebar.js"></script>

</html>