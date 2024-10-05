<?php

if (! defined('ABSPATH')) exit; // Exit if accessed directly

class My_Custom_Widget_1 extends \Elementor\Widget_Base
{
    public function get_name()
    {
        return 'my_custom_widget_1';
    }

    public function get_title()
    {
        return __('My Custom Widget 1', 'base-elementor');
    }

    public function get_icon()
    {
        return 'eicon-code'; // Icon cho widget
    }

    public function get_categories()
    {
        return ['custom_widgets_theme']; // Nhóm widgets của bạn
    }

    protected function _register_controls()
    {
        // Thêm trường nhập liệu text
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Content', 'base-elementor'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        // 1. Trường nhập liệu Text
        $this->add_control(
            'text_input',
            [
                'label' => __('Text Input', 'base-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Default text', 'base-elementor'),
            ]
        );

        // 2. Trường Textarea
        $this->add_control(
            'textarea_input',
            [
                'label' => __('Textarea', 'base-elementor'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => __('Default textarea content', 'base-elementor'),
            ]
        );

        // 3. Trường Number
        $this->add_control(
            'number_input',
            [
                'label' => __('Number', 'base-elementor'),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 5,
            ]
        );

        // 4. Trường Email
        $this->add_control(
            'email_input',
            [
                'label' => __('Email Address', 'base-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'input_type' => 'email', // Chỉ định loại input là email (HTML5)
                'placeholder' => __('Enter your email', 'base-elementor'),
                'default' => '',
            ]
        );

        // 5. Trường URL
        $this->add_control(
            'url_input',
            [
                'label' => __('URL', 'base-elementor'),
                'type' => \Elementor\Controls_Manager::URL,
                'default' => [
                    'url' => 'https://example.com',
                    'is_external' => true,
                ],
            ]
        );

        // 6. Trường Checkbox
        $this->add_control(
            'checkbox_input',
            [
                'label' => __('Enable Option', 'base-elementor'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'base-elementor'),
                'label_off' => __('No', 'base-elementor'),
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );

        // 7. Trường Select
        $this->add_control(
            'select_input',
            [
                'label' => __('Select', 'base-elementor'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'options' => [
                    'option_1' => __('Option 1', 'base-elementor'),
                    'option_2' => __('Option 2', 'base-elementor'),
                    'option_3' => __('Option 3', 'base-elementor'),
                ],
                'default' => 'option_1',
            ]
        );

        // 8. Trường Color
        $this->add_control(
            'color_input',
            [
                'label' => __('Color', 'base-elementor'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#ffffff',
            ]
        );

        // 9. Trường Media
        $this->add_control(
            'media_input',
            [
                'label' => __('Media', 'base-elementor'),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'default' => [
                    'url' => 'https://example.com/image.jpg',
                ],
            ]
        );

        // 10. Trường Slider
        $this->add_control(
            'slider_input',
            [
                'label' => __('Slider', 'base-elementor'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                        'step' => 1,
                    ],
                ],
                'default' => [
                    'size' => 50,
                ],
            ]
        );

        // 11. Trường Repeater
        $this->add_control(
            'repeater_input',
            [
                'label' => __('Repeater', 'base-elementor'),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => [
                    [
                        'name' => 'repeater_item',
                        'label' => __('Item', 'base-elementor'),
                        'type' => \Elementor\Controls_Manager::TEXT,
                        'default' => __('Repeater Item', 'base-elementor'),
                    ],
                ],
                'title_field' => '{{{ repeater_item }}}',
            ]
        );

        // 12. Trường WYSIWYG Editor
        $this->add_control(
            'editor_input',
            [
                'label' => __('Editor Input', 'base-elementor'),
                'type' => \Elementor\Controls_Manager::WYSIWYG,
                'default' => __('Default content', 'base-elementor'),
            ]
        );

        // 13. Trường Toggle
        $this->add_control(
            'toggle_input',
            [
                'label' => __('Toggle', 'base-elementor'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'base-elementor'),
                'label_off' => __('No', 'base-elementor'),
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );

        // 14. Trường Range
        $this->add_control(
            'range_input',
            [
                'label' => __('Range', 'base-elementor'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                        'step' => 1,
                    ],
                ],
                'default' => [
                    'size' => 20,
                ],
            ]
        );

        // lựa chọn post type
        $this->add_control(
            'post_type_select',
            [
                'label' => __('Select Post Type', 'base-elementor'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'options' => [
                    'post' => __('Post', 'base-elementor'),
                    'page' => __('Page', 'base-elementor'),
                    'your_custom_post_type' => __('Your Custom Post Type', 'base-elementor'), // Add any custom post types here
                ],
                'default' => 'post',
            ]
        );

        $this->end_controls_section();
    }

    protected function render()
    {
        // Lấy giá trị từ các trường nhập liệu
        $text_input = $this->get_settings_for_display('text_input');
        $textarea_input = $this->get_settings_for_display('textarea_input');
        $number_input = $this->get_settings_for_display('number_input');
        $email_input = $this->get_settings_for_display('email_input');
        $url_input = $this->get_settings_for_display('url_input');
        $checkbox_input = $this->get_settings_for_display('checkbox_input');
        $select_input = $this->get_settings_for_display('select_input');
        $color_input = $this->get_settings_for_display('color_input');
        $media_input = $this->get_settings_for_display('media_input');
        $slider_input = $this->get_settings_for_display('slider_input');
        $repeater_items = $this->get_settings_for_display('repeater_input');
        $editor_input = $this->get_settings_for_display('editor_input');
        $toggle_input = $this->get_settings_for_display('toggle_input');
        $range_input = $this->get_settings_for_display('range_input');

        // Bắt đầu render HTML
?>
        <div class="my-custom-widget-1">
            <!-- Hiển thị Text Input -->
            <h2><?php echo esc_html($text_input); ?></h2>

            <!-- Hiển thị Textarea -->
            <p><?php echo esc_html($textarea_input); ?></p>

            <!-- Hiển thị Number Input -->
            <p>Number Input: <?php echo esc_html($number_input); ?></p>

            <!-- Hiển thị Email Input -->
            <p>Email: <?php echo esc_html($email_input); ?></p>

            <!-- Hiển thị URL -->
            <p>URL: <a href="<?php echo esc_url($url_input['url']); ?>" target="_blank"><?php echo esc_html($url_input['url']); ?></a></p>

            <!-- Hiển thị Checkbox -->
            <p>Checkbox: <?php echo ($checkbox_input === 'yes') ? 'Checked' : 'Unchecked'; ?></p>

            <!-- Hiển thị Select -->
            <p>Selected Option: <?php echo esc_html($select_input); ?></p>

            <!-- Hiển thị Color Input -->
            <div style="background-color: <?php echo esc_attr($color_input); ?>; padding: 10px;">
                Selected Color: <?php echo esc_attr($color_input); ?>
            </div>

            <!-- Hiển thị Media -->
            <?php if (!empty($media_input['url'])) : ?>
                <div>
                    <img src="<?php echo esc_url($media_input['url']); ?>" alt="Selected Media" style="max-width:100%;">
                </div>
            <?php endif; ?>

            <!-- Hiển thị Slider -->
            <p>Slider Value: <?php echo esc_html($slider_input['size']); ?>px</p>

            <!-- Hiển thị Repeater Items -->
            <?php if (!empty($repeater_items)) : ?>
                <ul>
                    <?php foreach ($repeater_items as $item) : ?>
                        <li><?php echo esc_html($item['repeater_item']); ?></li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>

            <!-- Hiển thị Editor Input -->
            <div class="editor-content">
                <?php echo wp_kses_post($editor_input); ?>
            </div>

            <!-- Hiển thị Toggle -->
            <p>Toggle: <?php echo ($toggle_input === 'yes') ? 'ON' : 'OFF'; ?></p>

            <!-- Hiển thị Range -->
            <p>Range Value: <?php echo esc_html($range_input['size']); ?>px</p>
        </div>
<?php
    }
}
