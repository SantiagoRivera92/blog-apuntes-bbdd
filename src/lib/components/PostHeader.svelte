<script lang="ts">
	export let post;
</script>

<header class="mb-8 border-b border-border pb-8">
	<h1
		class="mb-4 text-2xl font-bold tracking-tight text-balance text-foreground"
		style={`view-transition-name: post-title-${post.metadata.slug}`}
	>
		{post.metadata.title}
	</h1>
	<div class="mt-1 flex items-center gap-3 text-muted-foreground">
		<span
			class="text-sm text-muted-foreground"
			style={`view-transition-name: post-author-${post.metadata.slug}`}
		>
			{post.metadata.author}
		</span>
		<span class="text-border" style={`view-transition-name: post-sep-${post.metadata.slug}`}>•</span
		>
		<time
			class="text-sm font-medium text-muted-foreground"
			style={`view-transition-name: post-date-${post.metadata.slug}`}
		>
			{new Date(post.metadata.date).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
		</time>
	</div>
</header>
