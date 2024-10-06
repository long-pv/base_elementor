<?php
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
    if (isset($value->response['pro-elements/pro-elements.php'])) {
        unset($value->response['pro-elements/pro-elements.php']);
    }

    return $value;
}
