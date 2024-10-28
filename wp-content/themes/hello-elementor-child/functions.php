<?php
define('CHILD_URI', get_stylesheet_directory_uri());
define('CHILD_PATH', get_stylesheet_directory());
if (!defined('_S_VERSION')) {
    define('_S_VERSION', '1.0.0');
}

/**
 * Enqueue scripts and styles.
 */
function base_elementor_scripts()
{
    wp_enqueue_style('child-theme-style', CHILD_URI, array(), _S_VERSION);

    // jquery
    wp_enqueue_script('child-theme-script-jquery', CHILD_URI . '/assets/inc/jquery/jquery-3.7.1.min.js', array(), _S_VERSION, true);

    // slick
    wp_enqueue_style('child-theme-style-slick-theme', CHILD_URI . '/assets/inc/slick/slick-theme.css', array(), _S_VERSION);
    wp_enqueue_style('child-theme-style-slick', CHILD_URI . '/assets/inc/slick/slick.css', array(), _S_VERSION);
    wp_enqueue_script('child-theme-script-slick', CHILD_URI . '/assets/inc/slick/slick.min.js', array(), _S_VERSION, true);

    // flatpickr
    wp_enqueue_style('child-theme-style-flatpickr', CHILD_URI . '/assets/inc/flatpickr/flatpickr.min.css', array(), _S_VERSION);
    wp_enqueue_script('child-theme-script-flatpickr', CHILD_URI . '/assets/inc/flatpickr/flatpickr.js', array(), _S_VERSION, true);

    // validate
    wp_enqueue_script('child-theme-script-validate', CHILD_URI . '/assets/inc/validate/jquery.validate.min.js', array(), _S_VERSION, true);

    // matchHeight
    wp_enqueue_script('child-theme-script-matchHeight', CHILD_URI . '/assets/inc/matchHeight/jquery.matchHeight.js', array(), _S_VERSION, true);

    // intlTelInput
    wp_enqueue_style('child-theme-style-intlTelInput', CHILD_URI . '/assets/inc/intlTelInput/intlTelInput.css', array(), _S_VERSION);
    wp_enqueue_script('child-theme-script-intlTelInput', CHILD_URI . '/assets/inc/intlTelInput/intlTelInput.js', array(), _S_VERSION, true);

    // select2
    wp_enqueue_style('child-theme-style-select2', CHILD_URI . '/assets/inc/select2/select2.css', array(), _S_VERSION);
    wp_enqueue_script('child-theme-script-select2', CHILD_URI . '/assets/inc/select2/select2.js', array(), _S_VERSION, true);

    // add custom main css/js
    wp_enqueue_style('child-theme-style-main', CHILD_URI . '/assets/css/main.css', array(), _S_VERSION);
    wp_enqueue_script('child-theme-script-main', CHILD_URI . '/assets/js/main.js', array(), _S_VERSION, true);
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

// Setup theme setting page
if (function_exists('acf_add_options_page')) {
    $name_option = 'Theme Settings';
    acf_add_options_page(
        array(
            'page_title' => $name_option,
            'menu_title' => $name_option,
            'menu_slug' => 'theme-settings',
            'capability' => 'edit_posts',
            'redirect' => false,
            'position' => 80
        )
    );
}