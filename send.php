<?php

print_r($_POST);
$name = $_POST['name'];
$email = $_POST['email'];
$Message = $_POST ['Message'];
$tel = $_POST ['tel'];
$formcontent = "
Imię : $name \n
Email: $email \n
Wiadomość: $Message \n
telefon: $tel \n";
mail("halo@oko-studio.pl","My subject",$formcontent);


header("Location: https://oko-studio.pl/");
?>