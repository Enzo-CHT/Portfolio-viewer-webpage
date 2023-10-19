<?php
$dir = scandir("projects/");
$response = array();
for ($i = 2; $i < sizeof($dir); $i++) {
  try {
    $uri = "projects/" . $dir[$i];
    $json_data = @file_get_contents($uri . "/infos.json");
  } catch (Exception $e) {
    echo "info.json not found";
  }

  $decoded_data = json_decode($json_data, true);
  if ($decoded_data !== null) {
    $response[] = $decoded_data;
  }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <link rel="stylesheet" href="css/gallery.css" />
  <link rel="stylesheet" href="css/style.css" />
  <script src="js/features.js"></script>
  <script src="js/slidebar.js"></script>
  <script>
    publicData = <?php print_r(json_encode($response)) ?>;
  </script>

</head>

<body>
  <main>

    <div class=container>
      <input type="button" class="next-btn" id="prevBtn" onclick='showSlide(-1,publicData);' value="&#x3c;" />
      <section id="gallery" class="img-container img-container-width"></section>
      <input type="button" class="next-btn" id="nextBtn" onclick='showSlide(1,publicData);' value="&#x3e;" />
    </div>
    <section id="infos" class="view view-width">

      <img class="illustration" src="" alt="image-selected-project" id="image-selected-project" />
      <h3 id="title-selected-project"></h3>
      <div class="description">
        <p id="description-selected-project"></p>
      </div>
      <div>
        <ul id="links-list" class="links-list">

        </ul>
      </div>


    </section>
  </main>
</body>
<script>
  fillGallery(publicData);
  showSlide(0, publicData);
 
</script>


</html>