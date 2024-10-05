<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package base_elementor
 */

?>

<?php
// Kiểm tra nếu Elementor có footer template trong Theme Builder
if (function_exists('elementor_theme_do_location') && elementor_theme_do_location('footer')) {
	// Nếu Elementor có footer template, thì sử dụng template này
	elementor_theme_do_location('footer');
}
?>

<?php wp_footer(); ?>

</body>

</html>