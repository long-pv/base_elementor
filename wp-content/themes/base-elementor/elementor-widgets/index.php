<?php
if (! defined('ABSPATH')) exit; // Exit if accessed directly

// Bao gồm các widget tùy chỉnh
require_once(__DIR__ . '/my-custom-widget-1.php');
require_once(__DIR__ . '/my-custom-widget-2.php');
require_once(__DIR__ . '/my-custom-widget-3.php');

function register_custom_widgets($widgets_manager)
{
    // Đăng ký các widget
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
