<?php
//if "email" variable is filled out, send email
if (isset($_REQUEST['email']))  {

  //Email information
  $admin_email = "simon@staysosuite.com";
  $email = $_REQUEST['email'];
  $phone = $_REQUEST['phone'];
  $name = $_REQUEST['name'];
  $message = $_REQUEST['message'];
  
  //send email
  mail($admin_email,
    "The client need our help.",
    "The name: $name,\r\nphone number: $phone,\r\nemail: $email,\r\n cover letter: $message",
    "From: $email\r\nReply-To: $email\r\nReturn-Path: $email\r\nContent-Type: message/plain; charset=utf-8\r\nContent-Transfer-Encoding: 8bit");
  
  // Redirecting, to the main page, after sending a message.
  header('Location: ' . $_SERVER['HTTP_REFERER']);
}
  //if "email" variable is not filled out, display the form
?>