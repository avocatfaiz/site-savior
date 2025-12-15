<?php
/**
 * Template Name: Mohcine Layout
 * Description: Full-width canvas for the Mohcine React bundle.
 */

get_header();
?>

<div id="mohcine-root">
	<div id="root"></div>
</div>

<!-- Runtime patch: Fix React Router basename for production -->
<script>
(function() {
	// Patch history to remove /wordpress prefix if present in URL
	var originalPushState = history.pushState;
	var originalReplaceState = history.replaceState;
	
	// Normalize path - remove /wordpress prefix for production
	function normalizePath(url) {
		if (typeof url === 'string' && url.startsWith('/wordpress')) {
			return url.replace('/wordpress', '') || '/';
		}
		return url;
	}
	
	history.pushState = function(state, title, url) {
		return originalPushState.call(this, state, title, normalizePath(url));
	};
	
	history.replaceState = function(state, title, url) {
		return originalReplaceState.call(this, state, title, normalizePath(url));
	};
})();
</script>

<?php
get_footer();
