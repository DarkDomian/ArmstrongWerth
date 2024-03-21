<?php

define('WP_USE_THEMES', false);
require('wp-load.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = sanitize_text_field($_POST["name"]);
    $email = sanitize_email($_POST["email"]);
    $telephone = sanitize_text_field($_POST["tel"]);

    $to = "John@aw-oboe.shop"; 
    $subject = "New Form Submission";
    $message = "Name: $name\nEmail: $email\nTelephone: $telephone";

    wp_mail($to, $subject, $message);
}

?>