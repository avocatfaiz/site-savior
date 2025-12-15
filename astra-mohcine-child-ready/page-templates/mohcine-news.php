<?php
/**
 * Template Name: Mohcine News
 * Description: Styled news archive that lists blog posts.
 */

get_header();

$paged = max( 1, get_query_var( 'paged' ) );
$query = new WP_Query(
	array(
		'post_type'      => 'post',
		'post_status'    => 'publish',
		'posts_per_page' => 6,
		'paged'          => $paged,
	)
);
?>

<style>
	.mohcine-news-page {
		background: #0f4744;
		color: #f5f5f5;
		font-family: inherit;
	}
	.mohcine-news-hero {
		padding: 64px 0;
		text-align: center;
		background: linear-gradient(180deg, #0f4744 0%, #0f4744 60%, #e6f0ee 60%, #e6f0ee 100%);
	}
	.mohcine-container {
		width: min(1200px, 92vw);
		margin: 0 auto;
	}
	.mohcine-news-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 24px;
	}
	.mohcine-card {
		background: #0f4744;
		color: #f5f5f5;
		border-radius: 18px;
		overflow: hidden;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}
	.mohcine-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 24px 60px rgba(0, 0, 0, 0.16);
	}
	.mohcine-card img {
		width: 100%;
		height: 200px;
		object-fit: cover;
		display: block;
	}
	.mohcine-card-body {
		padding: 18px 20px 22px;
	}
	.mohcine-meta {
		display: flex;
		align-items: center;
		gap: 8px;
		color: rgba(245, 245, 245, 0.75);
		font-size: 13px;
		margin-bottom: 8px;
	}
	.mohcine-pill {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: #ffc044;
		color: #0f4744;
		font-weight: 700;
		font-size: 12px;
		padding: 6px 10px;
		border-radius: 999px;
	}
	.mohcine-title {
		font-size: 18px;
		margin: 8px 0;
		line-height: 1.4;
		color: #f5f5f5;
	}
	.mohcine-excerpt {
		font-size: 14px;
		color: rgba(245, 245, 245, 0.85);
		line-height: 1.6;
	}
	.mohcine-readmore {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		margin-top: 12px;
		color: #ffc044;
		font-weight: 700;
		text-decoration: none;
	}
	.mohcine-readmore:hover { text-decoration: underline; }
	.mohcine-pagination {
		display: flex;
		justify-content: center;
		gap: 10px;
		margin: 32px 0 48px;
	}
	.mohcine-pagination a,
	.mohcine-pagination span {
		padding: 10px 14px;
		border-radius: 10px;
		background: #0f4744;
		color: #f5f5f5;
		text-decoration: none;
	}
	.mohcine-pagination .current { background: #ffc044; color: #0f4744; font-weight: 700; }
	@media (max-width: 768px) {
		.mohcine-card img { height: 180px; }
		.mohcine-title { font-size: 16px; }
	}
</style>

<div class="mohcine-news-page">
	<section class="mohcine-news-hero">
		<div class="mohcine-container">
			<h1 style="font-size:36px; margin:0 0 10px; font-weight:800;">الأخبار</h1>
			<p style="color:rgba(245,245,245,0.8); font-size:16px;">آخر أخبار وفعاليات الجمعية ومستجداتها</p>
		</div>
	</section>

	<section style="padding:48px 0; background:#e6f0ee;">
		<div class="mohcine-container">
			<div class="mohcine-news-grid">
				<?php if ( $query->have_posts() ) : ?>
					<?php while ( $query->have_posts() ) : $query->the_post(); ?>
						<article class="mohcine-card">
							<?php if ( has_post_thumbnail() ) : ?>
								<a href="<?php the_permalink(); ?>">
									<?php the_post_thumbnail( 'large' ); ?>
								</a>
							<?php endif; ?>
							<div class="mohcine-card-body">
								<div class="mohcine-meta">
									<span class="mohcine-pill"><?php echo esc_html( get_the_category_list( ', ' ) ? wp_strip_all_tags( get_the_category_list( ', ' ) ) : 'أخبار' ); ?></span>
									<span><?php echo esc_html( get_the_date() ); ?></span>
								</div>
								<h2 class="mohcine-title"><a href="<?php the_permalink(); ?>" style="color:inherit; text-decoration:none;"><?php the_title(); ?></a></h2>
								<p class="mohcine-excerpt"><?php echo esc_html( get_the_excerpt() ); ?></p>
								<a class="mohcine-readmore" href="<?php the_permalink(); ?>">
									قراءة المزيد <span aria-hidden="true">←</span>
								</a>
							</div>
						</article>
					<?php endwhile; wp_reset_postdata(); ?>
				<?php else : ?>
					<p style="color:#0f4744; font-weight:600;">لا توجد مقالات حالياً.</p>
				<?php endif; ?>
			</div>

			<div class="mohcine-pagination">
				<?php
				echo paginate_links(
					array(
						'total'   => $query->max_num_pages,
						'current' => $paged,
					)
				);
				?>
			</div>
		</div>
	</section>
</div>

<?php
get_footer();
