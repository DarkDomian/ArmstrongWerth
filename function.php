<?php

function AW_styles_and_scripts(){
    wp_enqueue_style('AW-style', get_stylesheet_uri() . '/style.css' );    
    wp_enqueue_script('AW-script', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0', TRUE);

}

add_action('wp_enqueue_scripts', 'AW_styles_and_scripts');



?>