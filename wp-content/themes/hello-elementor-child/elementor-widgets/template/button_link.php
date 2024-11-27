<?php
if (!defined('ABSPATH')) exit; // Exit if accessed directly

class Button_Link_Widget extends \Elementor\Widget_Base
{
    public function get_name()
    {
        return 'Button_Link_Widget';
    }

    public function get_title()
    {
        return __('Button Link', 'child_theme');
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
                'label' => __('Content', 'child_theme'),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        // Text input
        $this->add_control(
            'button_text',
            [
                'label'       => __('Button Text', 'child_theme'),
                'type'        => \Elementor\Controls_Manager::TEXT,
                'default'     => __('Click Here', 'child_theme'),
                'placeholder' => __('Enter button text', 'child_theme'),
            ]
        );

        // URL input
        $this->add_control(
            'button_link',
            [
                'label'       => __('Button Link', 'child_theme'),
                'type'        => \Elementor\Controls_Manager::URL,
                'placeholder' => __('https://example.com', 'child_theme'),
                'default'     => [
                    'url'    => '#',
                    'is_external' => false,
                    'nofollow'    => false,
                ],
            ]
        );

        // Alignment
        $this->add_control(
            'button_align',
            [
                'label'   => __('Button Alignment', 'child_theme'),
                'type'    => \Elementor\Controls_Manager::SELECT,
                'default' => 'flex-start',
                'options' => [
                    'flex-start' => __('Left', 'child_theme'),
                    'center'     => __('Center', 'child_theme'),
                    'flex-end'   => __('Right', 'child_theme'),
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function render()
    {
        $settings = $this->get_settings_for_display();
        $button_text = $settings['button_text'];
        $button_link = $settings['button_link']['url'];
        $is_external = !empty($settings['button_link']['is_external']) ? 'target="_blank"' : '';
        $nofollow    = !empty($settings['button_link']['nofollow']) ? 'rel="nofollow"' : '';
        $align       = $settings['button_align'];
?>
        <div class="button_link_widget" style="display: flex; justify-content: <?php echo $align; ?>;">
            <a class="button_link_widget_btn" href="<?php echo $button_link; ?>" <?php echo $is_external . ' ' . $nofollow; ?>>
                <?php echo $button_text; ?>
            </a>
        </div>
<?php
    }
}
