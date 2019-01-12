<?php
//if "email" variable is filled out, send email
  if (isset($_REQUEST['email']))  {
  
  //Email information
  $admin_email = "info@mumbaicurryhouse.com.au";
  $email = $_REQUEST['email'];
  $phone = $_REQUEST['phone'];
  $name = $_REQUEST['name'];
  $text = $_REQUEST['text'];
  
  //send email
  mail($admin_email,
    "Waiting list",
    "The name: $name,\r\nphone number: $phone,\r\nemail: $email,\r\ncover letter: $text", 
    "From: $email\r\nReply-To: $email\r\nReturn-Path: $email\r\nContent-Type: text/plain; charset=utf-8\r\nContent-Transfer-Encoding: 8bit");
  
  // Redirecting, to the main page, after sending a message.
  header('Location: http://mumbaicurryhouse.com.au/');
  }
  //if "email" variable is not filled out, display the form
?>