<?php
function my_theme_setup()
{
    // Hỗ trợ cho Elementor Full Width
    add_theme_support('elementor-full-width');
    // Hỗ trợ Elementor Global CSS
    add_theme_support('elementor-global-styles');
}
add_action('after_setup_theme', 'my_theme_setup');

// stop upgrading wp cerber plugin
add_filter('site_transient_update_plugins', 'disable_plugins_update');
function disable_plugins_update($value)
{
    // disable acf pro
    if (isset($value->response['advanced-custom-fields-pro/acf.php'])) {
        unset($value->response['advanced-custom-fields-pro/acf.php']);
    }
    // disable wp cerber
    if (isset($value->response['wp-cerber/wp-cerber.php'])) {
        unset($value->response['wp-cerber/wp-cerber.php']);
    }
    // disable All-in-One WP Migration
    if (isset($value->response['all-in-one-wp-migration-master/all-in-one-wp-migration.php'])) {
        unset($value->response['all-in-one-wp-migration-master/all-in-one-wp-migration.php']);
    }
    // disable elementor pro
    if (isset($value->response['elementor-pro/elementor-pro.php'])) {
        unset($value->response['elementor-pro/elementor-pro.php']);
    }
    return $value;
}
