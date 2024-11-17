<?php

if (!defined('ABSPATH')) exit; // Exit if accessed directly

class Heading_Widget extends \Elementor\Widget_Base
{
    public function get_name()
    {
        return 'Heading_Widget';
    }

    public function get_title()
    {
        return __('Heading', 'child-theme');
    }

    public function get_icon()
    {
        return 'eicon-code';
    }

    public function get_categories()
    {
        return ['custom_widgets_theme'];
    }

    protected function _register_controls()
    {
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Content', 'child-theme'),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        // Title input
        $this->add_control(
            'heading_title',
            [
                'label'       => __('Heading Title', 'child-theme'),
                'type'        => \Elementor\Controls_Manager::TEXT,
                'default'     => __('Title section', 'child-theme'),
                'placeholder' => __('Enter your title here', 'child-theme'),
            ]
        );

        // Description textarea
        $this->add_control(
            'heading_description',
            [
                'label'       => __('Description', 'child-theme'),
                'type'        => \Elementor\Controls_Manager::TEXTAREA,
                'default'     => __('This is a description', 'child-theme'),
                'placeholder' => __('Enter your description here', 'child-theme'),
            ]
        );

        // Text alignment
        $this->add_control(
            'text_align',
            [
                'label'   => __('Text Alignment', 'child-theme'),
                'type'    => \Elementor\Controls_Manager::SELECT,
                'default' => 'left',
                'options' => [
                    'left'   => __('Left', 'child-theme'),
                    'center' => __('Center', 'child-theme'),
                    'right'  => __('Right', 'child-theme'),
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function render()
    {
        $settings = $this->get_settings_for_display();
        $title       = $settings['heading_title'] ?? '';
        $description = $settings['heading_description'] ?? '';
        $align       = $settings['text_align'] ?? '';
?>
        <div class="heading_widget" style="text-align: <?php echo esc_attr($align); ?>;">
            <h2 class="heading_widget_title">
                <?php echo $title; ?>
            </h2>
            <p class="heading_widget_desc">
                <?php echo $description; ?>
            </p>
        </div>
<?php
    }
}
