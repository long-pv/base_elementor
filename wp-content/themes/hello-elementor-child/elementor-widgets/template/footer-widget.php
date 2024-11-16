<?php
class Elementor_Footer_Widget extends \Elementor\Widget_Base
{

    public function get_name()
    {
        return 'custom_footer';
    }

    public function get_title()
    {
        return __('Footer', 'child-theme');
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
        // Thêm các điều khiển tùy chỉnh cho footer ở đây
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Content', 'child-theme'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'footer_text',
            [
                'label' => __('Footer Text', 'child-theme'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('This is the footer', 'child-theme'),
            ]
        );

        $this->end_controls_section();
    }

    protected function render()
    {
        $settings = $this->get_settings_for_display();
?>
        <footer>
            <div class="custom-footer">
                <p><?php echo esc_html($settings['footer_text']); ?></p>
                <!-- Thêm code footer tùy chỉnh của bạn -->
            </div>
        </footer>
<?php
    }
}
