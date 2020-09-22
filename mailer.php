<?php

    //get the form fields, removes html tags and whitespace
    $name = strip_tags(trim$_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    //check the data
    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: https://zimvomatwa.github.io/index.php?success=-1#form");
        exit;
    }

    //set the recepient email address. Update this to your desired email address.
    $recipient = "thehuman.zimvo@gmail.com";

    //set the email subject
    $subject = "New contact from $name";

    //build the email content
    $email_content = "Name: $name\n";
    $email_content = "Email: $email\n";
    $email_content = "Messages:\n$message\n";

    //build the email headers
    $email_headers = "From: $name <$email>";

    //send the email
    mail($recipient, $subject, $email_content, $email_headers))

    //redirect to the index.php page with success code
    header("Location: https://zimvomatwa.github.io/index.php?success=1#form");


?>