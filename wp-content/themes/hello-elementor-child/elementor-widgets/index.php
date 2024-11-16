<?php
if (!defined('ABSPATH'))
    exit; // Exit if accessed directly

// include file
require_once CHILD_PATH . '/elementor-widgets/template/header-widget.php';
require_once CHILD_PATH . '/elementor-widgets/template/footer-widget.php';
require_once CHILD_PATH . '/elementor-widgets/template/my-custom-widget-1.php';
require_once CHILD_PATH . '/elementor-widgets/template/my-custom-widget-2.php';
require_once CHILD_PATH . '/elementor-widgets/template/my-custom-widget-3.php';

function register_custom_widgets($widgets_manager)
{
    // Register widgets
    $widgets_manager->register(new \Elementor_Header_Widget());
    $widgets_manager->register(new \Elementor_Footer_Widget());
    $widgets_manager->register(new \My_Custom_Widget_1());
    $widgets_manager->register(new \My_Custom_Widget_2());
    $widgets_manager->register(new \My_Custom_Widget_3());
}
add_action('elementor/widgets/register', 'register_custom_widgets');

function register_custom_widget_category($elements_manager)
{
    $elements_manager->add_category(
        'custom_widgets_theme',
        [
            'title' => __('Custom Widgets (theme)', 'base-elementor'),
            'icon' => 'eicon-code',
            'priority' => 0,
        ]
    );
}
add_action('elementor/elements/categories_registered', 'register_custom_widget_category');
