<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

mail(
	"Nathan.something@gmail.com", 
	"Message Form nusailbot.coe.neu.edu from " + $name, 
	$message,
	"From: $email"
);
echo "Thank you for your feedback";
?>