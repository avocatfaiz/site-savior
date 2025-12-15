<?php
/**
 * Asset loading for the Mohcine bundle.
 */

/**
 * Enqueue Mohcine Vite assets based on manifest.
 */
function astra_mohcine_enqueue_vite_assets() {
	$manifest_path = ASTRA_MOHCINE_DIR . '/assets/mohcine/.vite/manifest.json';

	if ( ! file_exists( $manifest_path ) ) {
		return;
	}

	$manifest = json_decode( file_get_contents( $manifest_path ), true );

	if ( empty( $manifest ) || ! is_array( $manifest ) ) {
		return;
	}

	$entry = null;
	foreach ( $manifest as $item ) {
		if ( isset( $item['isEntry'] ) && true === $item['isEntry'] ) {
			$entry = $item;
			break;
		}
	}

	if ( ! $entry ) {
		return;
	}

	// Enqueue CSS chunks.
	if ( ! empty( $entry['css'] ) && is_array( $entry['css'] ) ) {
		foreach ( $entry['css'] as $index => $css_file ) {
			wp_enqueue_style(
				"astra-mohcine-app-css-{$index}",
				ASTRA_MOHCINE_URI . '/assets/mohcine/' . ltrim( $css_file, '/' ),
				array(),
				ASTRA_MOHCINE_VERSION
			);
		}
	}

	// Enqueue JS entry.
	if ( ! empty( $entry['file'] ) ) {
		wp_enqueue_script(
			'astra-mohcine-app',
			ASTRA_MOHCINE_URI . '/assets/mohcine/' . ltrim( $entry['file'], '/' ),
			array(),
			ASTRA_MOHCINE_VERSION,
			true
		);
	}
}

/**
 * Set module type for the Vite bundle.
 */
function astra_mohcine_script_type( $tag, $handle, $src ) {
	if ( 'astra-mohcine-app' === $handle ) {
		return '<script type="module" src="' . esc_url( $src ) . '" crossorigin="anonymous"></script>';
	}
	return $tag;
}
add_filter( 'script_loader_tag', 'astra_mohcine_script_type', 10, 3 );
