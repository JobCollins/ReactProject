<?php

include 'dbconfig.php';

// create connection 
$connection = mysqli_connect($hostname, $user, $password, $database);

// get the received json 
$json = file_get_contents('php://input');

// decode json
$dec_json = json_decode($json, true);

$name = $dec_json['name'];

$email = $dec_json['email'];

$password = $dec_json['password'];

// check if email exists already
$exist_sql = "SELECT * FROM registration WHERE email='$email'";

// execute query
$execute = mysqli_fetch_array(mysqli_query($connection, $exist_sql));

if (isset($execute)) {
    # code...
    $message = "Email already exists. Log in instead!";

    $json_message = json_encode($message);

    echo $json_message;
}
else{
    #insert the registratin details int registration table
    $insert_sql = "INSERT INTO registration (name, email, password) values ('$name', '$email', '$password')";

    if(mysqli_query($connection, $insert_sql)){
        $msg = 'Registration successful. Go to login.';

        $json_msg = json_encode($msg);

        echo $json_msg;
    }
    else{
        echo "An error occurred. Try again.";
    }
}

msqli_close($connection);

?>