<?php
$output = array();
$output['response'] = 'Successfully sent! You should hear from us in a day or two';

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    http_response_code(400);
    $output['response'] = 'Go back, you shall not pass';
    echo json_encode($output);
    return;
}
$jsondata = file_get_contents('php://input');
$input = json_decode($jsondata, true);

$email = $input['email'];
$phone = $input['phone'];
$message = $input['message'];
$from = 'admin@runveteransmarathon.com';
$to = 'veteransmarathon@gmail.com';
$reply = $to;
if (isset($email)) {
    $reply = $email;
}

$headers = "From: admin@runveteransmarathon.com\r\nReply-To: $reply\r\n";
$subject = "Question from the Veterans Marathon site";
$emailMessage = "Phone: $phone \nEmail: $email\n\n";
$emailMessage .= $message;

if (!mail($to, $subject, $emailMessage, $headers)) {
    http_response_code(500);
    $output['response'] = 'Error sending email';
    echo json_encode($output);
    return;
}
http_response_code(201);
echo json_encode($output);
return;
