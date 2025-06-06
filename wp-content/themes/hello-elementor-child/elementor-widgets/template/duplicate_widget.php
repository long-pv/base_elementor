<?php
if (!defined('ABSPATH')) exit; // Exit if accessed directly

class Duplicate_Widget extends \Elementor\Widget_Base
{

    public function get_name()
    {
        return 'Duplicate_Widget';
    }

    public function get_title()
    {
        return __('Duplicate Widget', 'child_theme');
    }

    public function get_icon()
    {
        return 'eicon-code-bold'; // https://elementor.github.io/elementor-icons/
    }

    public function get_categories()
    {
        return ['general'];
    }

    protected function _register_controls()
    {
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Content', 'child_theme'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->end_controls_section();
    }

    protected function render()
    {
        $settings = $this->get_settings_for_display();
?>
        <div class="duplicate_widget">
            <button class="custom_button">Click me</button>
            <div class="notification_desc d-none">Show content</div>
        </div>
    <?php
    }
}