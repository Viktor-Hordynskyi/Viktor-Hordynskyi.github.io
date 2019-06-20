<?php
//if "email" variable is filled out, send email
if (isset($_REQUEST['email']))  {

  //Email information
  $admin_email = "contact@ebrandbuilders.com";
  $email = $_REQUEST['email'];
  $name = $_REQUEST['name'];
  $message = $_REQUEST['message'];

  $subject = $name . ' - needs yuor help!';

  $mailbody = '
  <html>
  <head>
  <title>The client need our help.</title>
  </head>
  <body>
  <table>
  <tr>
  <th style="text-align: right;">The name:</th>
  <td>'.$name.';</td>
  </tr>
  <tr>
  <th style="text-align: right;">Email:</th>
  <td>'.$email.';</td>
  </tr>
  <tr>
  <th style="text-align: right;">Cover letter:</th>
  <td>'.$message.'.</td>
  </tr>    
  </table>
  </body>
  </html>';

  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
  $headers .= "From: email@hordynskiy.zzz.com.ua\r\n";
  $headers .= 'Reply-To:' . $email . "\r\n";

  //send email
  mail($admin_email, $subject, $mailbody, $headers);
}
?>