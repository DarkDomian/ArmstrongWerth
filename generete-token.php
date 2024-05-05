<?php
ini_set('session.gc_probability', 1);
ini_set('session.gc_divisor', 100);

ini_set('session.gc_maxlifetime', 10);
session_start();


$token = bin2hex(random_bytes(32));
$_SESSION['csrf_token'] = $token;

echo $token;


session_destroy();

?>