<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';
// require 'phpmailer/PHPMailerAutoload.php';
$email = $_POST['email'];
$name = $_POST['name'];
$prefix = $_POST['prefix'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$body = "<div>Phone Number: $prefix$phone</div>" . $message;

$mail = new PHPMailer(true);
// $mail->set('Sendmail', 'C:\xampp\sendmail\sendmail.exe');

$send_using_gmail = false;

//Send mail using gmail
if($send_using_gmail){
    $mail->IsSMTP(); // telling the class to use SMTP
    $mail->SMTPAuth = true; // enable SMTP authentication
    $mail->SMTPSecure = "ssl"; // sets the prefix to the servier
    $mail->Host = "smtp.gmail.com"; // sets GMAIL as the SMTP server
    $mail->Port = 465; // set the SMTP port for the GMAIL server
    $mail->Username = "your-gmail-account@gmail.com"; // GMAIL username
    $mail->Password = "your-gmail-password"; // GMAIL password
}
$mail->isSendMail();


//Typical mail data
// $mail->isHTML(true);  
$mail->AddAddress("odcruningodc@gmail.com", "odc");
$mail->SetFrom($email, $name);
$mail->Subject = "Contacts";
$mail->Body = $body;


try{
    $mail->Send();
    echo "Success!";
} catch(Exception $e){
    //Something went bad
    echo "Fail - " . $mail->ErrorInfo;
}

?>