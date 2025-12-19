<?php
/**
 * REST endpoints for contact and volunteer forms.
 */

/**
 * Send an email using wp_mail with sanitized payload.
 *
 * @param array  $data Data to include.
 * @param string $subject Subject line.
 *
 * @return WP_REST_Response
 */
function astra_mohcine_send_form_email( $data, $subject ) {
	$admin_email = get_option( 'admin_email' );

	$allowed = array(
		'name'    => '',
		'email'   => '',
		'phone'   => '',
		'subject' => '',
		'message' => '',
		'years'   => '',
		'topic'   => '',
		'form'    => '',
	);

	$payload = array_intersect_key( wp_unslash( $data ), $allowed );

	$name    = isset( $payload['name'] ) ? sanitize_text_field( $payload['name'] ) : '';
	$email   = isset( $payload['email'] ) ? sanitize_email( $payload['email'] ) : '';
	$phone   = isset( $payload['phone'] ) ? sanitize_text_field( $payload['phone'] ) : '';
	$years   = isset( $payload['years'] ) ? sanitize_text_field( $payload['years'] ) : '';
	$topic   = isset( $payload['topic'] ) ? sanitize_text_field( $payload['topic'] ) : '';
	$message = isset( $payload['message'] ) ? wp_kses_post( $payload['message'] ) : '';
	$form    = isset( $payload['form'] ) ? sanitize_text_field( $payload['form'] ) : 'general';

	if ( empty( $name ) || empty( $email ) || empty( $message ) ) {
		return new WP_REST_Response(
			array(
				'success' => false,
				'message' => 'الرجاء تعبئة الحقول الإلزامية.',
			),
			400
		);
	}

	$body  = '<h3>بيانات النموذج (' . esc_html( $form ) . ')</h3>';
	$body .= '<p><strong>الاسم:</strong> ' . esc_html( $name ) . '</p>';
	$body .= '<p><strong>البريد:</strong> ' . esc_html( $email ) . '</p>';

	if ( ! empty( $phone ) ) {
		$body .= '<p><strong>الجوال:</strong> ' . esc_html( $phone ) . '</p>';
	}
	if ( ! empty( $years ) ) {
		$body .= '<p><strong>العمر:</strong> ' . esc_html( $years ) . '</p>';
	}
	if ( ! empty( $topic ) ) {
		$body .= '<p><strong>الموضوع:</strong> ' . esc_html( $topic ) . '</p>';
	}

	$body .= '<p><strong>الرسالة:</strong><br>' . nl2br( $message ) . '</p>';

	$headers = array(
		'Content-Type: text/html; charset=UTF-8',
		'Reply-To: ' . ( $name ? $name . ' <' . $email . '>' : $email ),
	);

	$sent = wp_mail( $admin_email, $subject, $body, $headers );

	if ( ! $sent ) {
		return new WP_REST_Response(
			array(
				'success' => false,
				'message' => 'تعذّر إرسال الطلب، حاول مجدداً لاحقاً.',
			),
			500
		);
	}

	return new WP_REST_Response(
		array(
			'success' => true,
			'message' => 'تم إرسال الطلب بنجاح.',
		)
	);
}

/**
 * Handle volunteer submissions.
 */
function astra_mohcine_rest_volunteer( WP_REST_Request $request ) {
	return astra_mohcine_send_form_email( $request->get_json_params(), 'طلب تطوع جديد' );
}

/**
 * Handle contact submissions.
 */
function astra_mohcine_rest_contact( WP_REST_Request $request ) {
	return astra_mohcine_send_form_email( $request->get_json_params(), 'رسالة تواصل جديدة' );
}

/**
 * Register routes.
 */
function astra_mohcine_register_rest_routes() {
	register_rest_route(
		'Mohcine/v1',
		'/volunteer',
		array(
			'methods'             => WP_REST_Server::CREATABLE,
			'callback'            => 'astra_mohcine_rest_volunteer',
			'permission_callback' => '__return_true',
		)
	);

	register_rest_route(
		'Mohcine/v1',
		'/contact',
		array(
			'methods'             => WP_REST_Server::CREATABLE,
			'callback'            => 'astra_mohcine_rest_contact',
			'permission_callback' => '__return_true',
		)
	);

	// Debug endpoint to check ACF hero_slides data.
	register_rest_route(
		'Mohcine/v1',
		'/debug-hero',
		array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => 'astra_mohcine_debug_hero',
			'permission_callback' => '__return_true',
		)
	);
}
add_action( 'rest_api_init', 'astra_mohcine_register_rest_routes' );

/**
 * Debug endpoint to check hero_slides ACF data.
 */
function astra_mohcine_debug_hero() {
	$page_id = astra_mohcine_settings_page_id();
	$debug   = array(
		'page_id'         => $page_id,
		'acf_exists'      => function_exists( 'get_field' ),
		'hero_slides_raw' => null,
		'all_fields'      => null,
	);

	if ( $page_id && function_exists( 'get_field' ) ) {
		$debug['hero_slides_raw'] = get_field( 'hero_slides', $page_id );
		$debug['all_fields']      = get_fields( $page_id );
	}

	return new WP_REST_Response( $debug );
}
