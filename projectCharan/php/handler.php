<?php
//if "email" variable is filled out, send email
  if (isset($_REQUEST['email']))  {
  
  //Email information
  $admin_email = "info@cleniro.com";
  $email = $_REQUEST['email'];
  $phone = $_REQUEST['phone'];
  $name = $_REQUEST['name'];
  $text = $_REQUEST['text'];
  
  //send email
  mail($admin_email, "Waiting list", "The name: $name, phone number: $phone, email: $email and cover letter: $text",  "From:" . $email);
  
  header('Location: http://projectCharan/');
  // echo '<h1 style="text-align: center; margin-top: 10%;">Thank you! We will contact you soon.</h1>'; 
  }
  
  //if "email" variable is not filled out, display the form
?>
