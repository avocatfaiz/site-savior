<?php
/**
 * Single post template styled for Mohcine.
 */

get_header();

the_post();
$category = get_the_category();
$cat_name = $category ? $category[0]->name : 'أخبار';
$date     = get_the_date();
$image    = get_the_post_thumbnail_url( get_the_ID(), 'large' );
?>

<style>
	/* Hide breadcrumbs/comments; keep header/footer available */
	.ast-breadcrumbs, .navigation-post { display: none !important; }
	.comment-respond, .comments-area { display: none !important; }

	.mohcine-single {
		background:#e6f0ee;
		color:#103f3c;
		font-family: inherit;
		min-height:100vh;
	}
	.mohcine-topbar {
		background:#0f4744;
		color:#f5f5f5;
		padding:14px 0;
	}
	.mohcine-topbar .container {
		width:min(1200px,92vw);
		margin:0 auto;
		display:flex;
		align-items:center;
		justify-content:space-between;
		gap:16px;
	}
	.mohcine-topbar .logo {
		display:flex;
		align-items:center;
		gap:10px;
		font-weight:800;
		font-size:18px;
	}
	.mohcine-topbar nav {
		display:flex;
		gap:18px;
		font-size:14px;
		font-weight:600;
	}
	.mohcine-topbar a { color:#f5f5f5; text-decoration:none; }
	.mohcine-topbar a:hover { color:#ffc044; }

	.mohcine-hero {
		background:#0f4744;
		color:#f5f5f5;
		padding:38px 0 42px;
		text-align:center;
	}
	.mohcine-container {
		width:min(1100px, 94vw);
		margin:0 auto;
	}
	.mohcine-pill {
		display:inline-flex;
		align-items:center;
		gap:8px;
		background:#ffc044;
		color:#0f4744;
		padding:6px 12px;
		border-radius:999px;
		font-weight:700;
		font-size:13px;
	}
	.mohcine-hero h1 {
		font-size:30px;
		margin:16px 0 8px;
		font-weight:800;
		color:#f5f5f5;
	}
	.mohcine-hero .meta {
		color:rgba(245,245,245,0.85);
		font-size:14px;
	}
	.mohcine-card {
		background:#ffffff;
		border-radius:20px;
		padding:0;
		box-shadow:0 18px 46px rgba(0,0,0,0.08);
		margin-top:-26px;
		overflow:hidden;
	}
	.mohcine-card img.featured {
		width:100%;
		height:auto;
		display:block;
		max-height:500px;
		object-fit:cover;
	}
	.mohcine-card .body {
		padding:24px 24px 28px;
	}
	.mohcine-card .excerpt {
		font-size:16px;
		line-height:1.8;
		color:#103f3c;
		margin:0 0 8px;
	}
	.mohcine-card .back {
		display:inline-flex;
		align-items:center;
		gap:6px;
		color:#0f4744;
		font-weight:700;
		text-decoration:none;
	}
	.mohcine-card .back:hover { text-decoration: underline; }
	@media (max-width: 768px) {
		.mohcine-topbar nav { display:none; }
		.mohcine-hero h1 { font-size:26px; }
	}
</style>

<div class="mohcine-single">
	<div class="mohcine-topbar">
		<div class="container">
			<div class="logo">
				<span style="width:10px;height:10px;border-radius:50%;background:#ffc044;display:inline-block;"></span>
				<span>جمعية القيروان</span>
			</div>
			<nav aria-label="الرئيسية">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>? ?????? ??? ???????</a>
				<a href="<?php echo esc_url( home_url( '/about' ) ); ?>? ?????? ??? ???????</a>
				<a href="<?php echo esc_url( home_url( '/programs' ) ); ?>? ?????? ??? ???????</a>
				<a href="<?php echo esc_url( home_url( '/news' ) ); ?>? ?????? ??? ???????</a>
				<a href="<?php echo esc_url( home_url( '/contact' ) ); ?>? ?????? ??? ???????</a>
			</nav>
		</div>
	</div>

	<div class="mohcine-hero">
		<div class="mohcine-container">
			<div class="mohcine-pill"><?php echo esc_html( $cat_name ); ?></div>
			<h1><?php the_title(); ?></h1>
			<div class="meta"><?php echo esc_html( $date ); ?></div>
		</div>
	</div>

	<div class="mohcine-container" style="padding-bottom:64px;">
		<div class="mohcine-card">
			<?php if ( $image ) : ?>
				<img class="featured" src="<?php echo esc_url( $image ); ?>" alt="<?php the_title_attribute(); ?>" />
			<?php endif; ?>
			<div class="body">
				<p class="excerpt"><?php echo wp_kses_post( get_the_excerpt() ); ?></p>
				<div class="content">
					<?php the_content(); ?>
				</div>
                <a class="back" href="<?php echo esc_url( home_url( '/news' ) ); ?>"><- Back to news</a>
			</div>
		</div>
	</div>
</div>

<?php
get_footer();
