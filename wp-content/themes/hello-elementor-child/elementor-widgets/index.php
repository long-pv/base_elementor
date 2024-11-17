<?php
if (!defined('ABSPATH'))
    exit; // Exit if accessed directly
define('TEMPLATE_PATH', CHILD_PATH . '/elementor-widgets/template/');

// include file
require_once TEMPLATE_PATH . 'header.php';
require_once TEMPLATE_PATH . 'footer.php';
require_once TEMPLATE_PATH . 'heading.php';
require_once TEMPLATE_PATH . 'button_link.php';

function register_custom_widgets($widgets_manager)
{
    // Register widgets
    $widgets_manager->register(new \Header_Widget());
    $widgets_manager->register(new \Footer_Widget());
    $widgets_manager->register(new \Heading_Widget());
    $widgets_manager->register(new \Button_Link_Widget());
}
add_action('elementor/widgets/register', 'register_custom_widgets');

function register_custom_widget_category($elements_manager)
{
    $elements_manager->add_category(
        'custom_widgets_theme',
        [
            'title' => __('Custom Widgets (theme)', 'child-theme'),
            'icon' => 'eicon-code',
            'priority' => 0,
        ]
    );
}
add_action('elementor/elements/categories_registered', 'register_custom_widget_category');
