<?php

if (! defined('ABSPATH')) exit; // Exit if accessed directly

class My_Custom_Widget_3 extends \Elementor\Widget_Base
{

    public function get_name()
    {
        return 'my_custom_widget_3';
    }

    public function get_title()
    {
        return __('My Custom Widget 3', 'my-textdomain');
    }

    public function get_icon()
    {
        return 'eicon-code'; // Icon cho widget
    }

    public function get_categories()
    {
        return ['custom_widgets_theme']; // Nhóm widgets của bạn
    }

    protected function render()
    {
        echo '<div class="my-custom-widget-3">Hello, this is My Custom Widget 3!</div>';
    }
}
