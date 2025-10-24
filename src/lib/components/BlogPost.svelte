<script lang="ts">
	export let post;
</script>

<a href={`/blog/${post.slug}`} class="block">
	<div
		class="rounded-lg border border-border bg-card p-8 transition-all duration-200 hover:border-accent/50 hover:shadow-lg h-64 flex flex-col justify-between"
	>
		<h2
			class="mt-3 mb-2 text-2xl font-semibold text-balance text-foreground transition-colors group-hover:text-accent"
			style={`view-transition-name: post-title-${post.slug}`}
		>
			{post.title}
		</h2>
		<div class="mt-1 flex items-center gap-3 text-muted-foreground">
			<span
				class="text-sm text-muted-foreground"
				style={`view-transition-name: post-author-${post.slug}`}
			>
				{post.author}
			</span>
			<span class="text-border" style={`view-transition-name: post-sep-${post.slug}`}>•</span>
			<time
				class="text-sm font-medium text-muted-foreground"
				style={`view-transition-name: post-date-${post.slug}`}
			>
				{new Date(post.date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</time>
		</div>
	</div>
</a>
