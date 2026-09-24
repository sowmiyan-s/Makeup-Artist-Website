<?php
$servername = "localhost";
$username = "thilotha_makeup_artist"; // Your MySQL username
$password = "sJk7vBZak8YeFppWVrxL"; // Your MySQL password
$dbname = "thilotha_makeup_artist"; // Database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

