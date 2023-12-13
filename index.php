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
    <a href="../" class="button quit">
      <img class='icons' src="icons/close.png">
    </a>
    <div class=container>
      <input type="button" class="next-btn" id="prevBtn" onclick='showSlide(-1,publicData);' value="&#x3c;" />
      <section id="gallery" class="img-container img-container-width"></section>
      <input type="button" class="next-btn" id="nextBtn" onclick='showSlide(1,publicData);' value="&#x3e;" />
    </div>
    <section id="infos" class="view view-width">
      <div class="top">
        <img class="illustration" src="" alt="image-selected-project" id="image-selected-project" />
        <aside>
          <h3 id="title-selected-project"></h3>
          <p class="display-date" id="date-selected-project"></p>

          <ul id="container-categories" class="categories"></ul>
        </aside>
      </div>
      <div class="bottom">
        <div class="description">
          <p id="description-selected-project"></p>
        </div>
        <div>
          <ul id="links-list" class="links-list">

          </ul>
        </div>
      </div>

    </section>
    <section></section>

  </main>

</body>
<script>
  fillGallery(publicData);
  showSlide(0, publicData);


  var container = document.querySelector(".img-container");

  container.addEventListener("wheel", function(event) {
    // Calculate the new scroll position
    var scrollAmount = event.deltaY;
    var currentScrollLeft = container.scrollLeft;
    var newScrollLeft = currentScrollLeft + scrollAmount;

    // Smoothly scroll to the new position
    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth" // Add smooth scrolling
    });

    // Prevent the default scrolling behavior
    event.preventDefault();
  });
</script>



</html>