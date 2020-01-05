<?php
session_start();

class JsonHandler
{
    protected static $_messages = array(
        JSON_ERROR_NONE => "No error has occurred",
        JSON_ERROR_DEPTH => "The maximum stack depth has been exceeded",
        JSON_ERROR_STATE_MISMATCH => "Invalid or malformed JSON",
        JSON_ERROR_CTRL_CHAR => "Control character error, possibly incorrectly encoded",
        JSON_ERROR_SYNTAX => "Syntax error",
        JSON_ERROR_UTF8 => "Malformed UTF-8 characters, possibly incorrectly encoded",
    );

    public static function encode($value, $options = 0)
    {
        if ($value == null) {
            return ("Value Null");
        }
        $result = json_encode($value, $options);

        if ($result) {
            return $result;
        }
        throw new RuntimeException(static::$_messages[json_last_error()]);
    }

    public static function decode($json, $assoc = false)
    {
        $result = json_decode($json, $assoc);

        if ($result) {
            return $result;
        }
        throw new RuntimeException(static::$_messages[json_last_error()]);
    }
}

$output = array();
$output['status'] = '200';
$output['response'] = 'Successfully sent. You should hear from us in a day or two';

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    echo 'Go back, you shall not pass';
    return;
}
$jsondata = file_get_contents('php://input');
$input = json_decode($jsondata, true);

$email = $input['email'];
$phone = $input['phone'];
$message = $input['message'];
$from = 'admin@runveteransmarathon.com';
$to = 'sethrgbird@gmail.com';
$reply = $to;
if (isset($email)) {
    $reply = $email;
}

$headers = "From: admin@runveteransmarathon.com\r\nReply-To: $reply\r\n";
$subject = "Question from the Veterans Marathon site";
$message = "Phone: $phone - Email: $email\n\n\n";
$message .= $message;

if (!mail($to, $subject, $message, $headers)) {
    $output['status'] = '500';
    $output['response'] = 'Error sending email';
    return;
}
echo JsonHandler::encode($output);

