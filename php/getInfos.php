<?php




$dir = scandir("../projects/");

$json_response = [];

for ($i = 2; $i < sizeof($dir); $i++) {

    $uri = "projects/" . $dir[$i] ;
    $json_data = file_get_contents("../" .$uri. "/infos.json");
    
    $json_response[] = [
        'img' => $uri . "/img.jpg",
        'info' => json_decode($json_data, true),
    ];

}


print_r(json_encode($json_response));
