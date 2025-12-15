<?php
/**
 * Custom footer output for Mohcine template.
 */

function astra_mohcine_footer_data( $use_acf = true ) {
	$defaults = array(
		'logo_title'              => 'جمعية القيروان',
		'logo_subtitle'           => 'لتنمية الشباب',
		'description'             => 'رؤيتنا في تمكين الشباب وتنمية مهاراتهم هي المحرك الأساسي لمبادراتنا لمجتمع نشط يحتاج إلى الشباب للتطور والإبداع.',
		'copyright'               => '© 2025 جمعية القيروان لتنمية الشباب. جميع الحقوق محفوظة',
		'address'                 => 'الرياض - المملكة العربية السعودية',
		'phone'                   => '0559951124',
		'email'                   => 'info@qairouan.org.sa',
		'hours'                   => 'الأحد - الخميس: 8 ص - 4 م',
		'hosting_note'            => 'تصميم : استضافة رؤيتنا لخدمات الويب',
		'hosting_url'             => 'https://rebrand.ly/itechlab',
		'newsletter_text'         => 'احصل على آخر الأخبار والفعاليات',
		'newsletter_placeholder'  => 'البريد الإلكتروني',
		'whatsapp_link'           => 'https://wa.me/966559951124',
		'instagram_link'          => '#',
		'facebook_link'           => '#',
		'youtube_link'            => '#',
		'tiktok_link'             => '#',
	);

	$page_id = astra_mohcine_settings_page_id();
	$fields  = array();

	if ( $page_id ) {
		if ( $use_acf && function_exists( 'get_field' ) ) {
			$fields = get_field( 'footer_group', $page_id );
		} else {
			$meta = get_post_meta( $page_id, 'footer_group', true );
			if ( is_array( $meta ) ) {
				$fields = $meta;
			}
		}
	}

	if ( is_array( $fields ) ) {
		$defaults = array_merge( $defaults, array_filter( $fields ) );
	}

	return $defaults;
}

/**
 * Hide existing footer and render custom footer on Mohcine template.
 */
function astra_mohcine_render_custom_footer() {
	if ( ! astra_mohcine_is_template() ) {
		return;
	}

	$data = astra_mohcine_footer_data();
	?>
	<style>
		.mohcine-template .site-footer,
		.mohcine-template #mohcine-root footer {
			display: none !important;
		}
	</style>
	<footer class="bg-teal-dark text-cream">
		<div class="container-custom py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
				<div class="sm:col-span-2 lg:col-span-1">
					<div class="flex items-center gap-3 mb-4 md:mb-6">
						<div class="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
							<svg viewBox="0 0 100 100" class="w-full h-full" aria-hidden="true">
								<circle cx="50" cy="50" r="8" fill="hsl(var(--secondary))"></circle>
								<circle cx="70" cy="50" r="5" fill="hsl(var(--secondary))"></circle>
								<circle cx="64.1421" cy="64.1421" r="5" fill="hsl(var(--secondary))"></circle>
								<circle cx="50" cy="70" r="5" fill="hsl(var(--secondary))"></circle>
								<circle cx="35.8579" cy="64.1421" r="5" fill="hsl(var(--secondary))"></circle>
								<circle cx="30" cy="50" r="5" fill="hsl(var(--secondary))"></circle>
								<circle cx="35.8579" cy="35.8579" r="5" fill="hsl(var(--secondary))"></circle>
								<circle cx="50" cy="30" r="5" fill="hsl(var(--secondary))"></circle>
								<circle cx="64.1421" cy="35.8579" r="5" fill="hsl(var(--secondary))"></circle>
								<circle cx="79.5641" cy="62.2459" r="4" fill="hsl(var(--secondary))"></circle>
								<circle cx="62.2459" cy="79.5641" r="4" fill="hsl(var(--secondary))"></circle>
								<circle cx="37.7541" cy="79.5641" r="4" fill="hsl(var(--secondary))"></circle>
								<circle cx="20.4359" cy="62.2459" r="4" fill="hsl(var(--secondary))"></circle>
								<circle cx="20.4359" cy="37.7541" r="4" fill="hsl(var(--secondary))"></circle>
								<circle cx="37.7541" cy="20.4359" r="4" fill="hsl(var(--secondary))"></circle>
								<circle cx="62.2459" cy="20.4359" r="4" fill="hsl(var(--secondary))"></circle>
								<circle cx="79.5641" cy="37.7541" r="4" fill="hsl(var(--secondary))"></circle>
							</svg>
						</div>
						<div>
							<h3 class="font-bold text-base md:text-lg text-cream"><?php echo esc_html( $data['logo_title'] ); ?></h3>
							<p class="text-xs text-cream"><?php echo esc_html( $data['logo_subtitle'] ); ?></p>
						</div>
					</div>
					<p class="text-cream/80 text-sm leading-relaxed mb-4"><?php echo esc_html( $data['description'] ); ?></p>
					<p class="text-cream/60 text-xs"><?php echo esc_html( $data['copyright'] ); ?></p>
				</div>

				<div>
					<h3 class="font-bold text-base md:text-lg mb-4 md:mb-6 text-secondary">معلومات التواصل</h3>
					<ul class="space-y-3 md:space-y-4">
						<li class="flex items-start gap-3">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4 md:w-5 md:h-5 text-secondary shrink-0 mt-0.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
							<span class="text-xs md:text-sm text-cream/80"><?php echo esc_html( $data['address'] ); ?></span>
						</li>
						<li class="flex items-center gap-3">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-4 h-4 md:w-5 md:h-5 text-secondary shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
							<a href="tel:<?php echo esc_attr( $data['phone'] ); ?>" class="text-xs md:text-sm text-cream/80 hover:text-cream" dir="ltr"><?php echo esc_html( $data['phone'] ); ?></a>
						</li>
						<li class="flex items-center gap-3">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-4 h-4 md:w-5 md:h-5 text-secondary shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
							<a href="mailto:<?php echo esc_attr( $data['email'] ); ?>" class="text-xs md:text-sm text-cream/80 hover:text-cream break-all"><?php echo esc_html( $data['email'] ); ?></a>
						</li>
						<li class="flex items-center gap-3">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock w-4 h-4 md:w-5 md:h-5 text-secondary shrink-0"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
							<span class="text-xs md:text-sm text-cream/80"><?php echo esc_html( $data['hours'] ); ?></span>
						</li>
					</ul>
					<div class="mt-4 md:mt-6 flex items-center gap-2 bg-cream/10 rounded-lg p-2 md:p-3">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-4 h-4 md:w-5 md:h-5 text-secondary shrink-0"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
						<div>
							<p class="text-xs text-cream/60">استضافة ودعم بيئة</p>
							<p class="text-xs md:text-sm font-semibold">المركز الوطني للقطاع غير الربحي</p>
						</div>
					</div>
				</div>

				<div>
					<h3 class="font-bold text-base md:text-lg mb-4 md:mb-6 text-secondary">روابط سريعة</h3>
					<ul class="space-y-2 md:space-y-3">
						<li><a class="text-xs md:text-sm text-cream/80 hover:text-secondary transition-colors" href="/">الرئيسية</a></li>
						<li><a class="text-xs md:text-sm text-cream/80 hover:text-secondary transition-colors" href="/about">عن الجمعية</a></li>
						<li><a class="text-xs md:text-sm text-cream/80 hover:text-secondary transition-colors" href="/programs">البرامج والمشاريع</a></li>
						<li><a class="text-xs md:text-sm text-cream/80 hover:text-secondary transition-colors" href="/news">الأخبار</a></li>
						<li><a class="text-xs md:text-sm text-cream/80 hover:text-secondary transition-colors" href="/contact">اتصل بنا</a></li>
					</ul>

					<h3 class="font-bold text-base md:text-lg mt-4 md:mt-6 mb-3 md:mb-4 text-secondary">خدمات</h3>
					<ul class="space-y-2 md:space-y-3">
						<li><a class="text-xs md:text-sm text-cream/80 hover:text-secondary transition-colors" href="/contact?type=membership">التسجيل كعضو</a></li>
						<li><a class="text-xs md:text-sm text-cream/80 hover:text-secondary transition-colors" href="/volunteer">طلب تطوع</a></li>
						<li><a class="text-xs md:text-sm text-cream/80 hover:text-secondary transition-colors" href="/governance/board">أعضاء مجلس الإدارة</a></li>
						<li><a class="text-xs md:text-sm text-cream/80 hover:text-secondary transition-colors" href="/governance/regulations">اللائحة الأساسية</a></li>
					</ul>
				</div>

				<div>
					<h3 class="font-bold text-base md:text-lg mb-4 md:mb-6 text-secondary">النشرة البريدية</h3>
					<p class="text-xs md:text-sm text-cream/80 mb-3 md:mb-4"><?php echo esc_html( $data['newsletter_text'] ); ?></p>
					<div class="flex gap-2">
						<input type="email" class="flex w-full rounded-lg border-2 px-4 py-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-secondary transition-all disabled:cursor-not-allowed disabled:opacity-50 bg-cream/10 border-cream/20 text-cream placeholder:text-cream/50 text-sm h-9 md:h-10" placeholder="<?php echo esc_attr( $data['newsletter_placeholder'] ); ?>">
						<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-l from-gold to-gold-light text-teal-dark hover:opacity-90 shadow-gold font-bold shrink-0 h-9 w-9 md:h-10 md:w-10" aria-label="إرسال">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send w-4 h-4"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
						</button>
					</div>

					<h3 class="font-bold text-base md:text-lg mt-6 md:mt-8 mb-3 md:mb-4 text-secondary">تابعنا</h3>
					<div class="flex flex-wrap gap-2 md:gap-3">
						<?php
						$socials = array(
							array(
								'url'     => $data['whatsapp_link'],
								'label'   => 'واتساب',
								'classes' => 'hover:bg-[#25D366]',
								'icon'    => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle w-4 h-4 md:w-5 md:h-5"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>',
							),
							array(
								'url'     => $data['instagram_link'],
								'label'   => 'انستقرام',
								'classes' => 'hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500',
								'icon'    => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram w-4 h-4 md:w-5 md:h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>',
							),
							array(
								'url'     => $data['facebook_link'],
								'label'   => 'فيسبوك',
								'classes' => 'hover:bg-[#1877F2]',
								'icon'    => '<svg class="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>',
							),
							array(
								'url'     => $data['youtube_link'],
								'label'   => 'يوتيوب',
								'classes' => 'hover:bg-[#FF0000]',
								'icon'    => '<svg class="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>',
							),
							array(
								'url'     => $data['tiktok_link'],
								'label'   => 'تيك توك',
								'classes' => 'hover:bg-black',
								'icon'    => '<svg class="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg>',
							),
						);
						foreach ( $socials as $soc ) {
							if ( empty( $soc['url'] ) || '#' === $soc['url'] ) {
								continue;
							}
							?>
							<a href="<?php echo esc_url( $soc['url'] ); ?>" target="_blank" rel="noopener noreferrer" class="w-9 h-9 md:w-10 md:h-10 rounded-full bg-cream/10 <?php echo esc_attr( $soc['classes'] ); ?> flex items-center justify-center transition-all" aria-label="<?php echo esc_attr( $soc['label'] ); ?>">
								<?php echo $soc['icon']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
							</a>
							<?php
						}
						?>
					</div>
				</div>
			</div>
		</div>
		<div class="border-t border-cream/10">
			<div class="container-custom py-3 md:py-4 px-4 md:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 md:gap-4">
				<p class="text-xs md:text-sm text-cream/60 text-center sm:text-right"><?php echo esc_html( $data['copyright'] ); ?></p>
				<a href="<?php echo esc_url( $data['hosting_url'] ); ?>" target="_blank" rel="noopener noreferrer" class="text-xs md:text-sm text-cream/60 hover:text-cream transition-colors text-center sm:text-left"><?php echo esc_html( $data['hosting_note'] ); ?></a>
			</div>
		</div>
	</footer>
	<?php
}
add_action( 'wp_footer', 'astra_mohcine_render_custom_footer', 15 );
