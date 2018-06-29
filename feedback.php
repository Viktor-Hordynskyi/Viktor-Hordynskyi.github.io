<?php 

$recepient = "morpi@rambler.ru";
$sitename = "Hordynskyi Viktor";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);

$subject = "A new submission from \"$sitename\"";
$message = "Name: $name \nEmail: $email \nText: $message";
$headers = array(
  "Content-type: text/plain; charset=\"utf-8\"",
  "From: $email",
  "Reply-To: $email", // чтобы при попытке ответить на письмо был подставлен адрес пользователя
);

mail($recepient, $subject, $message, implode("\r\n", $headers));

?>