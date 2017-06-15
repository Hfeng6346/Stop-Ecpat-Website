<?php
  // Insert DB Credentials Here
  $conn = new PDO("mysql:host=$servername;dbname=$databasename", $username, $password);
  $name = $_REQUEST["q1"];
  $email = $_REQUEST["q2"];
  $msg = $_REQUEST["q3"];
  $date = date("Y-m-d, H:i:s");
  $sql = "INSERT INTO Contact (Name, Email, Message, Date) VALUES ('$name', '$email', '$msg', '$date')";
  $statement = $conn->prepare($sql);
  $statement->execute();
  $conn = null;
?>
