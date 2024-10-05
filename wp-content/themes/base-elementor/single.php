<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package base_elementor
 */

get_header();
?>

<main id="main" class="site-main" role="main">
	<?php
	while (have_posts()) : the_post();
		the_content();
	endwhile;
	?>
</main>

<?php
get_footer();
