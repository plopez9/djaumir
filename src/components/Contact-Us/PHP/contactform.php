<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['contactName']) && empty($_POST['contactEmail'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = $_POST['contactName'];
	$to = "love4dacubs@yahoo.com";
	$from = $_POST['contactEmail'];

	// data

	$msg = $_POST['number'] . $_POST['emailMessage'];

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	echojson_encode(array(
		"sent" => true
	));
	}
  else
	{

	// tell the user about error

	echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>
