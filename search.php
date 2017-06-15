<?php
  // Insert DB Credentials Here
  $conn = new PDO("mysql:host=$servername;dbname=$databasename", $username, $password);
  $q = $_REQUEST["search"];
  if($q == ""){
    $sql = "SELECT * FROM Definitions";
  }
  else{
    $sql = "SELECT * FROM Definitions WHERE Term Like '%$q%'";
  }
  $statement = $conn->prepare($sql);
  $statement->execute();
  $rowCount = $statement->rowCount();
  if($rowCount == 0){
    echo "<div class='lead'>"."No results containing: ".$q."</div>";
  }
  else{
    echo "<div class='lead'>Displaying ".$rowCount." terms containing '".$q."':</div><br><ul>";
    for($i = 0; $i < $rowCount; $i++)
    {
      $data = $statement -> fetch(PDO::FETCH_ASSOC);
      echo "<li class='lead'>".$data["Term"].":</li>";
      echo "<li class='def'>".$data["Definition"]."</li><br>";
    }
    echo "</ul>";
  }
  $conn = null;
?>
