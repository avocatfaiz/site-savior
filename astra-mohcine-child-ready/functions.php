<?php
/**
 * Astra Mohcine Child - core functions.
 */

if ( ! defined( 'ASTRA_MOHCINE_VERSION' ) ) {
	define( 'ASTRA_MOHCINE_VERSION', '0.1.0' );
}

define( 'ASTRA_MOHCINE_DIR', get_stylesheet_directory() );
define( 'ASTRA_MOHCINE_URI', get_stylesheet_directory_uri() );

require_once ASTRA_MOHCINE_DIR . '/inc/asset-loader.php';
require_once ASTRA_MOHCINE_DIR . '/inc/data.php';
require_once ASTRA_MOHCINE_DIR . '/inc/acf-fields.php';
require_once ASTRA_MOHCINE_DIR . '/inc/rest-endpoints.php';
require_once ASTRA_MOHCINE_DIR . '/inc/custom-footer.php';

/**
 * Helper: determine if current page is using a Mohcine template.
 */
function astra_mohcine_is_template() {
	return is_page_template( 'page-templates/mohcine.php' ) || is_page_template( 'page-templates/mohcine-layout.php' ) || is_page_template( 'page-templates/mohcine-news.php' ) || is_singular( 'post' );
}

/**
 * Enqueue base child styles.
 */
function astra_mohcine_child_enqueue() {
	wp_enqueue_style(
		'astra-mohcine-child',
		ASTRA_MOHCINE_URI . '/style.css',
		array( 'astra-theme-css' ),
		filemtime( ASTRA_MOHCINE_DIR . '/style.css' )
	);
}
add_action( 'wp_enqueue_scripts', 'astra_mohcine_child_enqueue', 15 );

/**
 * Force full width container for the Mohcine template.
 */
function astra_mohcine_layout( $layout ) {
	if ( astra_mohcine_is_template() ) {
		return 'plain-container';
	}
	return $layout;
}
add_filter( 'astra_page_layout', 'astra_mohcine_layout' );

/**
 * Add body class for template specific styling.
 */
function astra_mohcine_body_class( $classes ) {
	if ( astra_mohcine_is_template() ) {
		$classes[] = 'mohcine-template';
	}
	return $classes;
}
add_filter( 'body_class', 'astra_mohcine_body_class' );

/**
 * Enqueue the built Mohcine assets and data injection.
 */
function astra_mohcine_enqueue_app() {
	if ( ! astra_mohcine_is_template() ) {
		return;
	}

	astra_mohcine_enqueue_vite_assets();
	astra_mohcine_inject_data();
}
add_action( 'wp_enqueue_scripts', 'astra_mohcine_enqueue_app', 25 );
