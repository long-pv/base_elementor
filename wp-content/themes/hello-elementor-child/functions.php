<?php
define('CHILD_PATH', get_stylesheet_directory_uri());
if (!defined('_S_VERSION')) {
    define('_S_VERSION', '1.0.0');
}

/**
 * Enqueue scripts and styles.
 */
function base_elementor_scripts()
{
    wp_enqueue_style('child-theme-style', CHILD_PATH, array(), _S_VERSION);

    // add custom main css/js
    wp_enqueue_style('child-theme-style-main', CHILD_PATH . '/assets/css/main.css', array(), _S_VERSION);
    wp_enqueue_script('child-theme-script-main', CHILD_PATH . '/assets/js/main.js', array(), _S_VERSION, true);
}
add_action('wp_enqueue_scripts', 'base_elementor_scripts');

// include file function
include_once CHILD_PATH . '/inc/ajax.php';
include_once CHILD_PATH . '/inc/custom_theme.php';

function load_custom_widgets()
{
    require_once CHILD_PATH . '/elementor-widgets/index.php';
}
add_action('elementor/init', 'load_custom_widgets');