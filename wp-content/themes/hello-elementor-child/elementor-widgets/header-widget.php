<?php
class Elementor_Header_Widget extends \Elementor\Widget_Base
{

    public function get_name()
    {
        return 'custom_header';
    }

    public function get_title()
    {
        return __('Header', 'base-elementor');
    }

    public function get_icon()
    {
        return 'eicon-code'; // Icon cho widget
    }

    public function get_categories()
    {
        return ['custom_widgets_theme'];
    }

    protected function _register_controls()
    {
        // Thêm các điều khiển tùy chỉnh cho header ở đây
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Content', 'base-elementor'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'header_text',
            [
                'label' => __('Header Text', 'base-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Hello World!', 'base-elementor'),
            ]
        );

        $this->end_controls_section();
    }

    protected function render()
    {
        $settings = $this->get_settings_for_display();
?>
        <header>
            <h1><?php echo esc_html($settings['header_text']); ?></h1>
            <!-- Custom header code của bạn -->
        </header>
<?php
    }
}
