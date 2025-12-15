<?php
/**
 * Data exposure for the Mohcine bundle.
 */

/**
 * Return page ID for Mohcine settings (page with slug mohcine-settings).
 */
function astra_mohcine_settings_page_id() {
	$page = get_page_by_path( 'mohcine-settings' );
	return $page ? (int) $page->ID : 0;
}

/**
 * Safe getter with default fallback.
 */
function astra_mohcine_get_field( $key, $default = null ) {
	if ( ! function_exists( 'get_field' ) ) {
		return $default;
	}

	$page_id = astra_mohcine_settings_page_id();
	if ( ! $page_id ) {
		return $default;
	}

	$value = get_field( $key, $page_id );
	return ( null !== $value && '' !== $value ) ? $value : $default;
}

/**
 * Defaults that mirror the static Mohcine content.
 */
function astra_mohcine_default_data() {
	$data = array(
		'assetsBase' => ASTRA_MOHCINE_URI . '/assets/mohcine/',
		'topbar'     => array(
			'phone'   => '0559951124',
			'email'   => 'info@qairouan.org.sa',
			'ctaText' => 'طلب تطوع',
			'ctaLink' => '/contact',
		),
		'nav'        => array(
			array(
				'label' => 'الرئيسية',
				'href'  => '/',
			),
			array(
				'label'    => 'عن الجمعية',
				'href'     => '/about',
				'children' => array(
					array( 'label' => 'نشأة الجمعية', 'href' => '/about#origin' ),
					array( 'label' => 'الرؤية والرسالة', 'href' => '/about#vision' ),
					array( 'label' => 'أهداف الجمعية', 'href' => '/about#goals' ),
					array( 'label' => 'كلمة رئيس مجلس الإدارة', 'href' => '/#chairman' ),
				),
			),
			array(
				'label'    => 'الحوكمة',
				'href'     => '/governance',
				'children' => array(
					array( 'label' => 'اللوائح والسياسات', 'href' => '/governance/policies' ),
					array( 'label' => 'الإجتماعات الجمعية', 'href' => '/governance/meetings' ),
					array( 'label' => 'اللائحة المالية', 'href' => '/governance/financial-policy' ),
					array( 'label' => 'القوائم المالية', 'href' => '/governance/financial-statements' ),
					array( 'label' => 'التقارير السنوية', 'href' => '/governance/annual-reports' ),
				),
			),
			array(
				'label' => 'الخدمات الإلكترونية',
				'href'  => '/#services',
			),
			array(
				'label' => 'البرامج والمشاريع',
				'href'  => '/#programs',
			),
			array(
				'label'    => 'المركز الإعلامي',
				'href'     => '/media',
				'children' => array(
					array( 'label' => 'الأخبار', 'href' => '/media/news' ),
					array( 'label' => 'ألبوم الصور', 'href' => '/media/photos' ),
					array( 'label' => 'ألبوم الفيديو', 'href' => '/media/videos' ),
				),
			),
			array(
				'label' => 'اتصل بنا',
				'href'  => '/contact',
			),
		),
		'heroSlides' => array(
			array( 'title' => 'القيروان بداية واعدة' ),
			array( 'title' => 'القيروان بداية واعدة' ),
			array( 'title' => 'القيروان بداية واعدة' ),
			array( 'title' => 'القيروان بداية واعدة' ),
		),
		'services'   => array(
			array(
				'title'       => 'دعم المحتاجين مادياً',
				'description' => 'نقدم الدعم المادي للمحتاجين من خلال برامج الزكاة والصدقات وكفالة الأيتام والأسر المحتاجة.',
				'cta'         => 'اقرأ المزيد',
				'icon'        => 'book-open',
			),
			array(
				'title'       => 'تعليم دراسة وتلاوة القرآن الكريم',
				'description' => 'برامج متكاملة لتعليم تلاوة القرآن الكريم وتجويده من خلال حلقات تحفيظ متخصصة ومعلمين مؤهلين.',
				'cta'         => 'اقرأ المزيد',
				'icon'        => 'users',
			),
			array(
				'title'       => 'حملات تبرع دائمة للمحتاجين',
				'description' => 'حملات تبرع مستمرة لدعم المحتاجين والمساهمة في مشاريع الخير والتنمية المجتمعية.',
				'cta'         => 'اقرأ المزيد',
				'icon'        => 'heart',
			),
		),
		'chairman'  => array(
			'title' => 'كلمة رئيس مجلس الادارة',
			'intro' => 'بسم الله الرحمن الرحيم',
			'para1' => 'الحمد لله، والصلاة والسلام على نبينا محمد، وعلى آله وصحبه وسلم.. أما بعد:',
			'para2' => 'الشباب هم الوقود الحقيقي، والمحرك الرئيس لمستقبل هذا البلد المعطاء، والطموح، وهم القوة البشـرية في بناء المجتمع، ودفع عجلة التنمية؛ لمزيد من التقدم؛ والنجاح؛ وفقاً لما أكدت عليه رؤية 2030، ومن هذا المنطلق تأتي مهمتنا، في جمعية القيروان لتنمية الشباب؛ بتوفير بيئة ممكنة، وملهمة للشباب؛ من خلال تبني العديد من المبادرات، والبرامج التنموية، والأنشطة الاجتماعية، بالشراكة مع الجهات ذات العلاقة، والاختصاص.',
			'para3' => 'ويسرنا، في جمعية القيروان، أن ندعو الجميع إلى التعاون، والإسهام، في دعم أنشطة الجمعية، وبرامجها التنموية..',
			'signoff' => 'والله ولي التوفيق.',
			'name'  => 'د. فؤاد بن عبدالكريم العبدالكريم',
			'role'  => 'رئيس مجلس الإدارة',
		),
		'about'     => array(
			'origin'  => 'جمعية القيروان لتنمية الشباب هي جمعية أهلية سعودية تأسست بموجب ترخيص من وزارة الموارد البشرية والتنمية الاجتماعية. تهدف الجمعية إلى تمكين الشباب وتطوير قدراتهم من خلال برامج تنموية متميزة تساهم في بناء جيل قادر على المشاركة الفاعلة في تحقيق رؤية المملكة 2030.',
			'vision'  => 'شباب مُمَكّن في بيئة مُلهِمة',
			'mission' => 'تمكين الشباب وتطوير قدراتهم من خلال برامج تنموية متميزة وشراكات فاعلة تساهم في بناء جيل قادر على المشاركة الفاعلة في تحقيق رؤية المملكة 2030.',
			'goals'   => array(
				'تمكين الشباب وتطوير قدراتهم',
				'توفير بيئة ملهمة ومحفزة للإبداع',
				'بناء شراكات فاعلة مع القطاعات المختلفة',
				'تنفيذ برامج تنموية متميزة',
				'المساهمة في تحقيق رؤية 2030',
				'تعزيز روح المسؤولية المجتمعية',
			),
			'timeline' => array(
				array(
					'year'        => '1443هـ',
					'title'       => 'التأسيس',
					'description' => 'تأسست جمعية القيروان لتنمية الشباب بموجب ترخيص وزارة الموارد البشرية',
				),
				array(
					'year'        => '1444هـ',
					'title'       => 'الانطلاق',
					'description' => 'إطلاق أولى البرامج التنموية للشباب',
				),
				array(
					'year'        => '1445هـ',
					'title'       => 'التوسع',
					'description' => 'زيادة عدد المستفيدين وتوسيع نطاق البرامج',
				),
				array(
					'year'        => '1446هـ',
					'title'       => 'النمو',
					'description' => 'تحقيق شراكات استراتيجية مع جهات رائدة',
				),
			),
		),

		'programs'   => array(
			array(
				'title'        => 'روح القيروان',
				'description'  => 'برنامج يهدف إلى تعزيز الهوية الوطنية والانتماء للمجتمع من خلال أنشطة ثقافية وتوعوية متنوعة تستهدف الشباب في مختلف الأعمار.',
				'objectives'   => array(
					'تعزيز الهوية الوطنية لدى الشباب',
					'تنمية روح الانتماء للمجتمع',
					'تقديم أنشطة ثقافية متنوعة',
					'بناء جيل واعي ومنتمي',
				),
				'beneficiaries' => '500+',
				'duration'      => 'على مدار العام',
				'location'      => 'حي القيروان - الرياض',
			),
			array(
				'title'        => 'مسرعات القيادة',
				'description'  => 'برنامج تدريبي مكثف يهدف إلى تطوير المهارات القيادية للشباب وتأهيلهم لقيادة المبادرات المجتمعية والمشاريع التطوعية.',
				'objectives'   => array(
					'تطوير المهارات القيادية',
					'التدريب على إدارة المشاريع',
					'بناء فرق العمل الفعالة',
					'تأهيل قادة المستقبل',
				),
				'beneficiaries' => '200+',
				'duration'      => '3 أشهر',
				'location'      => 'مقر الجمعية',
			),
			array(
				'title'        => 'ديوانية الشيخ محمد المهنا',
				'description'  => 'ملتقى أسبوعي يجمع الشباب مع الخبراء والمختصين في مختلف المجالات لتبادل الخبرات والمعرفة وبناء العلاقات المهنية.',
				'objectives'   => array(
					'تبادل الخبرات والمعرفة',
					'بناء شبكة علاقات مهنية',
					'الاستفادة من خبرات الكبار',
					'تعزيز التواصل بين الأجيال',
				),
				'beneficiaries' => '300+',
				'duration'      => 'أسبوعياً',
				'location'      => 'ديوانية الشيخ محمد المهنا',
			),
			array(
				'title'        => 'مرساة',
				'description'  => 'برنامج تعليمي متكامل يهدف إلى تعليم القرآن الكريم وتحفيظه للشباب بأساليب تعليمية حديثة ومتطورة.',
				'objectives'   => array(
					'تعليم القرآن الكريم',
					'تحفيظ القرآن بأساليب حديثة',
					'تعزيز الارتباط بكتاب الله',
					'تخريج حفظة متقنين',
				),
				'beneficiaries' => '400+',
				'duration'      => 'فصل دراسي كامل',
				'location'      => 'مقر الجمعية',
			),
			array(
				'title'        => 'فرحة عيد',
				'description'  => 'مبادرة موسمية لإدخال الفرحة على قلوب الأطفال والأسر المحتاجة في مناسبات الأعياد من خلال الهدايا والفعاليات الترفيهية.',
				'objectives'   => array(
					'إدخال الفرحة على الأسر المحتاجة',
					'توزيع الهدايا على الأطفال',
					'تنظيم فعاليات ترفيهية',
					'تعزيز روح التكافل',
				),
				'beneficiaries' => '1000+',
				'duration'      => 'موسم الأعياد',
				'location'      => 'حي القيروان والأحياء المجاورة',
			),
			array(
				'title'        => 'نادي القيروان الموسمي',
				'description'  => 'برنامج صيفي شامل يقدم أنشطة تعليمية وترفيهية ورياضية متنوعة للشباب خلال الإجازة الصيفية.',
				'objectives'   => array(
					'استثمار أوقات الفراغ',
					'تقديم أنشطة تعليمية متنوعة',
					'تنمية المواهب والمهارات',
					'بناء صداقات إيجابية',
				),
				'beneficiaries' => '350+',
				'duration'      => 'الإجازة الصيفية',
				'location'      => 'مقر الجمعية',
			),
		),
		'stats'      => array(
			array( 'label' => 'مشاريع', 'value' => 7, 'suffix' => '' ),
			array( 'label' => 'مستفيد', 'value' => 2724, 'suffix' => '' ),
			array( 'label' => 'متطوع', 'value' => 84, 'suffix' => '' ),
			array( 'label' => 'زيارات', 'value' => 10, 'suffix' => '' ),
		),
		'cta'        => array(
			'title'       => 'كن شريكنا في تمكين الشباب',
			'description' => 'انضم إلينا في تحقيق رؤية تمكين الشباب من خلال برامج ومبادرات نوعية تصنع فارقاً في المستقبل.',
			'buttonText'  => 'تواصل معنا',
			'buttonLink'  => '/contact',
		),
		'contact'    => array(
			'address' => 'الرياض - المملكة العربية السعودية',
			'phone'   => '0559951124',
			'email'   => 'info@qairouan.org.sa',
			'hours'   => 'الأحد - الخميس: 8 ص - 4 م',
			'mapEmbed' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.8267853837147!2d46.67195!3d24.7055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzE5LjgiTiA0NsKwNDAnMTkuMSJF!5e0!3m2!1sar!2ssa!4v1702500000000!5m2!1sar!2ssa',
		),
		'whatsapp'   => array(
			'phone'   => '966559951124',
			'message' => 'مرحبا، أود معرفة المزيد عن برامج الجمعية',
			'label'   => 'تواصل عبر واتساب',
		),
		'news'       => array(
			array(
				'title'    => 'احتفال الجمعية باليوم الوطني',
				'excerpt'  => 'أقامت الجمعية فعاليات متنوعة بمناسبة اليوم الوطني السعودي تضمنت مسابقات قرآنية وأنشطة ثقافية متعددة شارك فيها عدد كبير من الطلاب والطالبات.',
				'date'     => '15 نوفمبر 2024',
				'category' => 'فعاليات',
			),
			array(
				'title'    => 'ألبوم صور افتتاح المقر الجديد',
				'excerpt'  => 'تم افتتاح المقر الجديد للجمعية في حي الملك فهد بحضور عدد من المسؤولين والداعمين والمهتمين بالشأن القرآني.',
				'date'     => '10 نوفمبر 2024',
				'category' => 'أخبار',
			),
			array(
				'title'    => 'ألبوم صور معرض الكتاب 2024',
				'excerpt'  => 'شاركت الجمعية في معرض الرياض الدولي للكتاب بجناح متميز عرضت فيه برامجها وخدماتها القرآنية.',
				'date'     => '5 نوفمبر 2024',
				'category' => 'معارض',
			),
		),
	);

	// Ensure image keys exist for hero slides and programs.
	foreach ( $data['heroSlides'] as $i => $slide ) {
		if ( ! isset( $data['heroSlides'][ $i ]['image'] ) ) {
			$data['heroSlides'][ $i ]['image'] = null;
		}
	}
	foreach ( $data['programs'] as $i => $program ) {
		if ( ! isset( $data['programs'][ $i ]['image'] ) ) {
			$data['programs'][ $i ]['image'] = null;
		}
	}

	return $data;
}

/**
 * Build data object with ACF overrides where available.
 */
function astra_mohcine_build_data() {
	$data = astra_mohcine_default_data();
	$page_id = astra_mohcine_settings_page_id();

	// Prefer grouped topbar values if present.
	$topbar_group = ( $page_id && function_exists( 'get_field' ) ) ? get_field( 'topbar_group', $page_id ) : null;
	if ( is_array( $topbar_group ) ) {
		$data['topbar']['phone']   = ! empty( $topbar_group['topbar_phone'] ) ? $topbar_group['topbar_phone'] : $data['topbar']['phone'];
		$data['topbar']['email']   = ! empty( $topbar_group['topbar_email'] ) ? $topbar_group['topbar_email'] : $data['topbar']['email'];
		$data['topbar']['ctaText'] = ! empty( $topbar_group['topbar_cta_text'] ) ? $topbar_group['topbar_cta_text'] : $data['topbar']['ctaText'];
		$data['topbar']['ctaLink'] = ! empty( $topbar_group['topbar_cta_link'] ) ? $topbar_group['topbar_cta_link'] : $data['topbar']['ctaLink'];
	}

	// Fallback to legacy flat fields only if group is empty.
	if ( empty( $data['topbar']['phone'] ) ) {
		$data['topbar']['phone'] = astra_mohcine_get_field( 'topbar_phone', $data['topbar']['phone'] );
	}
	if ( empty( $data['topbar']['email'] ) ) {
		$data['topbar']['email'] = astra_mohcine_get_field( 'topbar_email', $data['topbar']['email'] );
	}
	if ( empty( $data['topbar']['ctaText'] ) ) {
		$data['topbar']['ctaText'] = astra_mohcine_get_field( 'topbar_cta_text', $data['topbar']['ctaText'] );
	}
	if ( empty( $data['topbar']['ctaLink'] ) ) {
		$data['topbar']['ctaLink'] = astra_mohcine_get_field( 'topbar_cta_link', $data['topbar']['ctaLink'] );
	}

	$data['cta']['title']       = astra_mohcine_get_field( 'cta_title', $data['cta']['title'] );
	$data['cta']['description'] = astra_mohcine_get_field( 'cta_description', $data['cta']['description'] );
	$data['cta']['buttonText']  = astra_mohcine_get_field( 'cta_button_text', $data['cta']['buttonText'] );
	$data['cta']['buttonLink']  = astra_mohcine_get_field( 'cta_button_link', $data['cta']['buttonLink'] );

	$data['contact']['address'] = astra_mohcine_get_field( 'contact_address', $data['contact']['address'] );
	$data['contact']['phone']   = astra_mohcine_get_field( 'contact_phone', $data['contact']['phone'] );
	$data['contact']['email']   = astra_mohcine_get_field( 'contact_email', $data['contact']['email'] );
	$data['contact']['hours']   = astra_mohcine_get_field( 'contact_hours', $data['contact']['hours'] );
	$data['contact']['mapEmbed'] = astra_mohcine_get_field( 'contact_map_embed', $data['contact']['mapEmbed'] );

	$data['whatsapp']['phone']   = astra_mohcine_get_field( 'whatsapp_phone', $data['whatsapp']['phone'] );
	$data['whatsapp']['message'] = astra_mohcine_get_field( 'whatsapp_message', $data['whatsapp']['message'] );
	$data['whatsapp']['label']   = astra_mohcine_get_field( 'whatsapp_label', $data['whatsapp']['label'] );

	// Hero slides (titles + images). Prefer group to capture nested values.
	$hero_group = ( $page_id && function_exists( 'get_field' ) ) ? get_field( 'hero_slides', $page_id ) : null;
	for ( $i = 0; $i < 4; $i++ ) {
		$key     = "hero_slide_" . ( $i + 1 ) . "_title";
		$img_key = "hero_slide_" . ( $i + 1 ) . "_image";

		if ( is_array( $hero_group ) ) {
			if ( isset( $hero_group[ $key ] ) && '' !== $hero_group[ $key ] ) {
				$data['heroSlides'][ $i ]['title'] = $hero_group[ $key ];
			}
			if ( isset( $hero_group[ $img_key ] ) && '' !== $hero_group[ $img_key ] ) {
				$data['heroSlides'][ $i ]['image'] = $hero_group[ $img_key ];
			}
		}

		// Fallback to flat fields.
		$data['heroSlides'][ $i ]['title'] = astra_mohcine_get_field( $key, $data['heroSlides'][ $i ]['title'] );
		$data['heroSlides'][ $i ]['image'] = astra_mohcine_get_field( $img_key, $data['heroSlides'][ $i ]['image'] ?? null );
	}

	// Services.
	for ( $i = 0; $i < count( $data['services'] ); $i++ ) {
		$data['services'][ $i ]['title']       = astra_mohcine_get_field( "service_" . ( $i + 1 ) . "_title", $data['services'][ $i ]['title'] );
		$data['services'][ $i ]['description'] = astra_mohcine_get_field( "service_" . ( $i + 1 ) . "_description", $data['services'][ $i ]['description'] );
		$data['services'][ $i ]['cta']         = astra_mohcine_get_field( "service_" . ( $i + 1 ) . "_cta", $data['services'][ $i ]['cta'] );
	}

	// Chairman section.
	$data['chairman']['title']   = astra_mohcine_get_field( 'chairman_title', $data['chairman']['title'] );
	$data['chairman']['intro']   = astra_mohcine_get_field( 'chairman_intro', $data['chairman']['intro'] );
	$data['chairman']['para1']   = astra_mohcine_get_field( 'chairman_para1', $data['chairman']['para1'] );
	$data['chairman']['para2']   = astra_mohcine_get_field( 'chairman_para2', $data['chairman']['para2'] );
	$data['chairman']['para3']   = astra_mohcine_get_field( 'chairman_para3', $data['chairman']['para3'] );
	$data['chairman']['signoff'] = astra_mohcine_get_field( 'chairman_signoff', $data['chairman']['signoff'] );
	$data['chairman']['name']    = astra_mohcine_get_field( 'chairman_name', $data['chairman']['name'] );
	$data['chairman']['role']    = astra_mohcine_get_field( 'chairman_role', $data['chairman']['role'] );

	// About page content.
	$data['about']['origin']  = astra_mohcine_get_field( 'about_origin', $data['about']['origin'] );
	$data['about']['vision']  = astra_mohcine_get_field( 'about_vision', $data['about']['vision'] );
	$data['about']['mission'] = astra_mohcine_get_field( 'about_mission', $data['about']['mission'] );

	for ( $i = 0; $i < count( $data['about']['goals'] ); $i++ ) {
		$data['about']['goals'][ $i ] = astra_mohcine_get_field( 'goal_' . ( $i + 1 ), $data['about']['goals'][ $i ] );
	}

	for ( $i = 0; $i < count( $data['about']['timeline'] ); $i++ ) {
		$index                            = $i + 1;
		$data['about']['timeline'][ $i ]['year']        = astra_mohcine_get_field( "timeline_{$index}_year", $data['about']['timeline'][ $i ]['year'] );
		$data['about']['timeline'][ $i ]['title']       = astra_mohcine_get_field( "timeline_{$index}_title", $data['about']['timeline'][ $i ]['title'] );
		$data['about']['timeline'][ $i ]['description'] = astra_mohcine_get_field( "timeline_{$index}_desc", $data['about']['timeline'][ $i ]['description'] );
	}

	// Programs.
	$programs_group = ( $page_id && function_exists( 'get_field' ) ) ? get_field( 'programs_group', $page_id ) : null;
	for ( $i = 0; $i < count( $data['programs'] ); $i++ ) {
		$program_index = $i + 1;
		$program       = $data['programs'][ $i ];

		// Prefer grouped programs structure to capture images and nested values.
		if ( is_array( $programs_group ) ) {
			$group_key = "program_{$program_index}";
			if ( isset( $programs_group[ $group_key ] ) && is_array( $programs_group[ $group_key ] ) ) {
				$pg = $programs_group[ $group_key ];
				foreach ( array( 'title', 'description', 'beneficiaries', 'duration', 'location', 'image' ) as $field_key ) {
					$full_key = "program_{$program_index}_{$field_key}";
					if ( isset( $pg[ $full_key ] ) && '' !== $pg[ $full_key ] ) {
						$program[ $field_key ] = $pg[ $full_key ];
					}
				}
			}
		}

		$program['title']        = astra_mohcine_get_field( "program_{$program_index}_title", $program['title'] );
		$program['description']  = astra_mohcine_get_field( "program_{$program_index}_description", $program['description'] );
		$program['beneficiaries'] = astra_mohcine_get_field( "program_{$program_index}_beneficiaries", $program['beneficiaries'] );
		$program['duration']      = astra_mohcine_get_field( "program_{$program_index}_duration", $program['duration'] );
		$program['location']      = astra_mohcine_get_field( "program_{$program_index}_location", $program['location'] );
		$program['image']         = astra_mohcine_get_field( "program_{$program_index}_image", $program['image'] ?? null );

		$objectives = array();
		$objective_count = max( count( $program['objectives'] ), 4 );

		for ( $j = 0; $j < $objective_count; $j++ ) {
			$default           = isset( $program['objectives'][ $j ] ) ? $program['objectives'][ $j ] : '';
			$objectives[]      = astra_mohcine_get_field( "program_{$program_index}_objective_" . ( $j + 1 ), $default );
		}

		$program['objectives']   = $objectives;
		$data['programs'][ $i ] = $program;
	}

	// Stats values.
	for ( $i = 0; $i < count( $data['stats'] ); $i++ ) {
		$data['stats'][ $i ]['value'] = (int) astra_mohcine_get_field( "stat_" . ( $i + 1 ) . "_value", $data['stats'][ $i ]['value'] );
	}

	$data['news'] = astra_mohcine_get_news( $data['news'] );

	return $data;
}

/**
 * Collect latest posts for the news sections.
 *
 * @param array $fallback Default items.
 * @return array
 */
function astra_mohcine_get_news( $fallback ) {
	$posts = get_posts(
		array(
			'post_type'      => 'post',
			'post_status'    => 'publish',
			'numberposts'    => 6,
			'orderby'        => 'date',
			'order'          => 'DESC',
			'suppress_filters' => false,
		)
	);

	if ( empty( $posts ) ) {
		return $fallback;
	}

	$items = array();

	foreach ( $posts as $post ) {
		$categories = get_the_category( $post->ID );
		$items[]    = array(
			'id'       => $post->ID,
			'title'    => get_the_title( $post ),
			'excerpt'  => wp_trim_words( get_the_excerpt( $post ), 28 ),
			'date'     => get_the_date( 'j F Y', $post ),
			'category' => ! empty( $categories ) ? $categories[0]->name : '',
			'image'    => get_the_post_thumbnail_url( $post, 'large' ),
			'link'     => get_permalink( $post ),
		);
	}

	return $items;
}

/**
 * Push the data object into the frontend.
 */
function astra_mohcine_inject_data() {
	add_action(
		'wp_footer',
		function() {
			$data = astra_mohcine_build_data();
			// Add basename for React Router - empty string means root
			$data['basename'] = '/';
			printf(
				'<script id="Mohcine-data">window.Mohcine_DATA = %s;</script>',
				wp_json_encode( $data )
			);
		},
		5
	);
}

/**
 * Prefill ACF fields in the admin with the same defaults used on the frontend.
 *
 * This ensures editors see meaningful values instead of empty inputs.
 */
function astra_mohcine_default_for_field_name( $name, $defaults, $current ) {
	// Direct name-to-default mappings.
	$footer_defaults = function_exists( 'astra_mohcine_footer_data' ) ? astra_mohcine_footer_data( false ) : array();
	$direct_map = array(
		'topbar_phone'       => $defaults['topbar']['phone'] ?? null,
		'topbar_email'       => $defaults['topbar']['email'] ?? null,
		'topbar_cta_text'    => $defaults['topbar']['ctaText'] ?? null,
		'topbar_cta_link'    => $defaults['topbar']['ctaLink'] ?? null,
		'cta_title'          => $defaults['cta']['title'] ?? null,
		'cta_description'    => $defaults['cta']['description'] ?? null,
		'cta_button_text'    => $defaults['cta']['buttonText'] ?? null,
		'cta_button_link'    => $defaults['cta']['buttonLink'] ?? null,
		'contact_address'    => $defaults['contact']['address'] ?? null,
		'contact_phone'      => $defaults['contact']['phone'] ?? null,
		'contact_email'      => $defaults['contact']['email'] ?? null,
		'contact_hours'      => $defaults['contact']['hours'] ?? null,
		'contact_map_embed'  => $defaults['contact']['mapEmbed'] ?? null,
		'whatsapp_phone'     => $defaults['whatsapp']['phone'] ?? null,
		'whatsapp_message'   => $defaults['whatsapp']['message'] ?? null,
		'whatsapp_label'     => $defaults['whatsapp']['label'] ?? null,
		'about_origin'       => $defaults['about']['origin'] ?? null,
		'about_vision'       => $defaults['about']['vision'] ?? null,
		'about_mission'      => $defaults['about']['mission'] ?? null,
		'chairman_title'     => $defaults['chairman']['title'] ?? null,
		'chairman_intro'     => $defaults['chairman']['intro'] ?? null,
		'chairman_para1'     => $defaults['chairman']['para1'] ?? null,
		'chairman_para2'     => $defaults['chairman']['para2'] ?? null,
		'chairman_para3'     => $defaults['chairman']['para3'] ?? null,
		'chairman_signoff'   => $defaults['chairman']['signoff'] ?? null,
		'chairman_name'      => $defaults['chairman']['name'] ?? null,
		'chairman_role'      => $defaults['chairman']['role'] ?? null,
		// Footer fields.
		'logo_title'             => $footer_defaults['logo_title'] ?? null,
		'logo_subtitle'          => $footer_defaults['logo_subtitle'] ?? null,
		'description'            => $footer_defaults['description'] ?? null,
		'copyright'              => $footer_defaults['copyright'] ?? null,
		'address'                => $footer_defaults['address'] ?? null,
		'phone'                  => $footer_defaults['phone'] ?? null,
		'email'                  => $footer_defaults['email'] ?? null,
		'hours'                  => $footer_defaults['hours'] ?? null,
		'hosting_note'           => $footer_defaults['hosting_note'] ?? null,
		'hosting_url'            => $footer_defaults['hosting_url'] ?? null,
		'newsletter_text'        => $footer_defaults['newsletter_text'] ?? null,
		'newsletter_placeholder' => $footer_defaults['newsletter_placeholder'] ?? null,
		'whatsapp_link'          => $footer_defaults['whatsapp_link'] ?? null,
		'instagram_link'         => $footer_defaults['instagram_link'] ?? null,
		'snapchat_link'          => $footer_defaults['snapchat_link'] ?? null,
		'facebook_link'          => $footer_defaults['facebook_link'] ?? null,
		'youtube_link'           => $footer_defaults['youtube_link'] ?? null,
		'tiktok_link'            => $footer_defaults['tiktok_link'] ?? null,
	);

	if ( isset( $direct_map[ $name ] ) && null !== $direct_map[ $name ] ) {
		return $direct_map[ $name ];
	}

	// Hero slides: hero_slide_1_title ... hero_slide_4_title.
	if ( preg_match( '/^hero_slide_(\d+)_title$/', $name, $m ) ) {
		$idx = (int) $m[1] - 1;
		return $defaults['heroSlides'][ $idx ]['title'] ?? $current;
	}
	if ( preg_match( '/^hero_slide_(\d+)_image$/', $name, $m ) ) {
		$idx = (int) $m[1] - 1;
		return $defaults['heroSlides'][ $idx ]['image'] ?? $current;
	}

	// Services: service_1_title/description/cta etc.
	if ( preg_match( '/^service_(\d+)_(title|description|cta)$/', $name, $m ) ) {
		$idx   = (int) $m[1] - 1;
		$field = $m[2];
		return $defaults['services'][ $idx ][ $field ] ?? $current;
	}

	// Programs main fields.
	if ( preg_match( '/^program_(\d+)_(title|description|beneficiaries|duration|location)$/', $name, $m ) ) {
		$p_idx = (int) $m[1] - 1;
		$field = $m[2];
		return $defaults['programs'][ $p_idx ][ $field ] ?? $current;
	}
	if ( preg_match( '/^program_(\d+)_image$/', $name, $m ) ) {
		$p_idx = (int) $m[1] - 1;
		return $defaults['programs'][ $p_idx ]['image'] ?? $current;
	}

	// Program objectives: program_1_objective_2 etc.
	if ( preg_match( '/^program_(\d+)_objective_(\d+)$/', $name, $m ) ) {
		$p_idx = (int) $m[1] - 1;
		$o_idx = (int) $m[2] - 1;
		return $defaults['programs'][ $p_idx ]['objectives'][ $o_idx ] ?? $current;
	}

	// Stats: stat_1_value ... stat_4_value.
	if ( preg_match( '/^stat_(\d+)_value$/', $name, $m ) ) {
		$s_idx = (int) $m[1] - 1;
		return $defaults['stats'][ $s_idx ]['value'] ?? $current;
	}

	// About goals: goal_1 ... goal_6.
	if ( preg_match( '/^goal_(\d+)$/', $name, $m ) ) {
		$g_idx = (int) $m[1] - 1;
		return $defaults['about']['goals'][ $g_idx ] ?? $current;
	}

	// Timeline: timeline_1_year/title/desc.
	if ( preg_match( '/^timeline_(\d+)_(year|title|desc)$/', $name, $m ) ) {
		$t_idx = (int) $m[1] - 1;
		$field = $m[2];
		$key   = ( 'desc' === $field ) ? 'description' : $field;
		return $defaults['about']['timeline'][ $t_idx ][ $key ] ?? $current;
	}

	return $current;
}

function astra_mohcine_acf_default_admin_values( $value, $post_id, $field ) {
	if ( ! is_admin() ) {
		return $value;
	}

	// Only apply to Mohcine Settings page.
	$settings_id = astra_mohcine_settings_page_id();
	if ( ! $settings_id || (int) $post_id !== $settings_id ) {
		return $value;
	}

	// Respect already-saved values.
	if ( null !== $value && '' !== $value ) {
		return $value;
	}

	$defaults = astra_mohcine_default_data();
	$name     = isset( $field['name'] ) ? $field['name'] : '';

	return astra_mohcine_default_for_field_name( $name, $defaults, $value );
}
add_filter( 'acf/load_value', 'astra_mohcine_acf_default_admin_values', 10, 3 );

/**
 * Also set default_value property so empty fields show defaults immediately in the UI.
 */
function astra_mohcine_acf_default_admin_field( $field ) {
	if ( ! is_admin() ) {
		return $field;
	}

	$settings_id = astra_mohcine_settings_page_id();
	if ( ! $settings_id ) {
		return $field;
	}

	$name     = isset( $field['name'] ) ? $field['name'] : '';
	if ( '' === $name ) {
		return $field;
	}

	// Avoid recursion: read meta directly instead of get_field().
	$current = get_post_meta( $settings_id, $name, true );
	$defaults = astra_mohcine_default_data();

	if ( null !== $current && '' !== $current ) {
		return $field;
	}

	$default_value = astra_mohcine_default_for_field_name( $name, $defaults, null );
	if ( null !== $default_value && ( ! isset( $field['default_value'] ) || '' === $field['default_value'] ) ) {
		$field['default_value'] = $default_value;
	}

	return $field;
}
add_filter( 'acf/load_field', 'astra_mohcine_acf_default_admin_field', 10, 1 );

/**
 * If labels are garbled (mojibake), replace with a readable label based on the field name.
 */
function astra_mohcine_acf_fix_labels( $field ) {
	if ( ! isset( $field['label'], $field['name'] ) ) {
		return $field;
	}

	$name = $field['name'];

	// Arabic label map.
	$map = array(
		'topbar_group'        => 'الشريط العلوي',
		'topbar_phone'        => 'رقم الهاتف',
		'topbar_email'        => 'البريد الإلكتروني',
		'topbar_cta_text'     => 'نص الزر',
		'topbar_cta_link'     => 'رابط الزر',
		'hero_slides'         => 'شرائح البطل',
		'services'            => 'الخدمات',
		'cta_group'           => 'دعوة للإجراء',
		'cta_title'           => 'عنوان الدعوة',
		'cta_description'     => 'وصف الدعوة',
		'cta_button_text'     => 'نص زر الدعوة',
		'cta_button_link'     => 'رابط زر الدعوة',
		'contact_group'       => 'معلومات التواصل',
		'contact_address'     => 'العنوان',
		'contact_phone'       => 'رقم الاتصال',
		'contact_email'       => 'البريد الإلكتروني',
		'contact_hours'       => 'أوقات العمل',
		'contact_map_embed'   => 'خريطة الموقع',
		'whatsapp_group'      => 'واتساب',
		'whatsapp_phone'      => 'رقم واتساب',
		'whatsapp_message'    => 'رسالة واتساب',
		'whatsapp_label'      => 'نص زر واتساب',
		'stats_group'         => 'الإحصائيات',
		'chairman_group'      => 'كلمة الرئيس',
		'chairman_title'      => 'عنوان كلمة الرئيس',
		'chairman_intro'      => 'المقدمة',
		'chairman_para1'      => 'الفقرة 1',
		'chairman_para2'      => 'الفقرة 2',
		'chairman_para3'      => 'الفقرة 3',
		'chairman_signoff'    => 'الخاتمة',
		'chairman_name'       => 'اسم الرئيس',
		'chairman_role'       => 'المسمى الوظيفي',
		'about_group'         => 'عن الجمعية',
		'about_origin'        => 'النشأة',
		'about_vision'        => 'الرؤية',
		'about_mission'       => 'الرسالة',
		'programs_group'      => 'البرامج والمشاريع',
	);

	// Pattern-based Arabic labels.
	$pattern_label = null;

	// Hero slides.
	if ( preg_match( '/^hero_slide_(\d+)_title$/', $name, $m ) ) {
		$pattern_label = 'شريحة ' . $m[1];
	}

	// Services.
	if ( preg_match( '/^service_(\d+)_(title|description|cta)$/', $name, $m ) ) {
		$index = $m[1];
		$part  = $m[2];
		$part_label = array(
			'title'       => 'عنوان الخدمة ',
			'description' => 'وصف الخدمة ',
			'cta'         => 'زر الخدمة ',
		);
		$pattern_label = $part_label[ $part ] . $index;
	}

	// Programs main fields.
	if ( preg_match( '/^program_(\d+)_(title|description|beneficiaries|duration|location)$/', $name, $m ) ) {
		$index = $m[1];
		$part  = $m[2];
		$part_label = array(
			'title'         => 'عنوان البرنامج ',
			'description'   => 'وصف البرنامج ',
			'beneficiaries' => 'المستفيدون ',
			'duration'      => 'المدة ',
			'location'      => 'الموقع ',
		);
		$pattern_label = $part_label[ $part ] . $index;
	}

	// Program objectives.
	if ( preg_match( '/^program_(\d+)_objective_(\d+)$/', $name, $m ) ) {
		$pattern_label = 'هدف ' . $m[2] . ' للبرنامج ' . $m[1];
	}

	// Stats.
	if ( preg_match( '/^stat_(\d+)_value$/', $name, $m ) ) {
		$pattern_label = 'إحصائية ' . $m[1];
	}

	// Goals.
	if ( preg_match( '/^goal_(\d+)$/', $name, $m ) ) {
		$pattern_label = 'هدف ' . $m[1];
	}

	// Timeline.
	if ( preg_match( '/^timeline_(\d+)_(year|title|desc)$/', $name, $m ) ) {
		$index = $m[1];
		$part  = $m[2];
		$part_label = array(
			'year'  => 'سنة ',
			'title' => 'عنوان ',
			'desc'  => 'وصف ',
		);
		$pattern_label = $part_label[ $part ] . $index;
	}

	// Apply map or pattern when label is garbled or map exists.
	if ( isset( $map[ $name ] ) ) {
		$field['label'] = $map[ $name ];
	} elseif ( null !== $pattern_label ) {
		$field['label'] = $pattern_label;
	} elseif ( false !== strpos( $field['label'], '�' ) ) {
		$field['label'] = ucwords( str_replace( '_', ' ', $name ) );
	}

	return $field;
}
add_filter( 'acf/load_field', 'astra_mohcine_acf_fix_labels', 5, 1 );
