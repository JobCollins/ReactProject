<?php

include 'dbconfig.php';

// create connection 
$connection = mysqli_connect($hostname, $user, $password, $database);

// get the received json 
$json = file_get_contents('php://input');

// decode json
$dec_json = json_decode($json, true);

$email = $dec_json['email'];

$password = $dec_json['password'];

$sql_find = "SELECT * FROM registration WHERE email='$email' and password='$password' ";

// execute query
$execute = mysqli_fetch_array(mysqli_query($connection, $sql_find));

if (isset($execute)) {
    # code...
    $successMsg = 'Credentials exist';

    $successMsg_json =json_encode($successMsg);

    echo $successMsg_json;
}
else {
    # code...
    $invalidMsg = 'Invalid email or password. Try again.';

    $invalidMsg_json = json_encode($invalidMsg);

    echo $invalidMsg_json;
}

mysqli_close($connection);




?>
