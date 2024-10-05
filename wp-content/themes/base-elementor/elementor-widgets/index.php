<?php
if (! defined('ABSPATH')) exit; // Exit if accessed directly

function base_elementor_theme_setup()
{
    // Hỗ trợ cho Elementor Full Width
    add_theme_support('elementor-full-width');
    // Hỗ trợ Elementor Global CSS
    add_theme_support('elementor-global-styles');
}
add_action('after_setup_theme', 'base_elementor_theme_setup');

// Bao gồm các widget tùy chỉnh
require_once(__DIR__ . '/header-widget.php');
require_once(__DIR__ . '/footer-widget.php');
require_once(__DIR__ . '/my-custom-widget-1.php');
require_once(__DIR__ . '/my-custom-widget-2.php');
require_once(__DIR__ . '/my-custom-widget-3.php');

function register_custom_widgets($widgets_manager)
{
    // Đăng ký các widget
    $widgets_manager->register(new \Elementor_Header_Widget());
    $widgets_manager->register(new \Elementor_Footer_Widget());
    $widgets_manager->register(new \My_Custom_Widget_1());
    $widgets_manager->register(new \My_Custom_Widget_2());
    $widgets_manager->register(new \My_Custom_Widget_3());
}
// Thêm hook để đăng ký widgets
add_action('elementor/widgets/register', 'register_custom_widgets');

function custom_widget_category($elements_manager)
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
// Thêm hook cho nhóm
add_action('elementor/elements/categories_registered', 'custom_widget_category');
