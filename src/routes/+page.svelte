<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Blog DAW</title>
	<meta name="description" content="Apuntes de Bases de Datos" />
</svelte:head>

<div class="min-h-screen bg-background">
	<div class="mx-auto max-w-4xl px-6 py-16">
		<header class="mb-16">
			<h1 class="mb-3 text-5xl font-bold tracking-tight text-foreground">Blog DAW</h1>
			<p class="text-lg text-muted-foreground">Apuntes de Bases de Datos</p>
		</header>

		<div class="space-y-8">
			{#each data.posts as post}
				<article class="group">
					<a href="/blog/{post.slug}" class="block">
						<div
							class="rounded-lg border border-border bg-card p-8 transition-all duration-200 hover:border-accent/50 hover:shadow-lg"
						>
							<h2
								class="mt-3 mb-2 text-2xl font-semibold text-balance text-foreground transition-colors group-hover:text-accent"
								style={`view-transition-name: post-title-${post.slug}`}
							>
								{post.title}
							</h2>
											<div class="flex items-center gap-3 text-muted-foreground mt-1">
												<span 
													class="text-sm text-muted-foreground" 
													style={`view-transition-name: post-author-${post.slug}`}
												>
													{post.author}
												</span>
												<span class="text-border" style={`view-transition-name: post-sep-${post.slug}`}>•</span>
												<time class="text-sm font-medium text-muted-foreground" style={`view-transition-name: post-date-${post.slug}`}>
													{new Date(post.date).toLocaleDateString('en-US', {
														year: 'numeric',
														month: 'long',
														day: 'numeric'
													})}
												</time>
											</div>
						</div>
					</a>
				</article>
			{/each}
		</div>
	</div>
</div>

<style>
	/* Additional styles for the modern card-based layout */
	.bg-background {
		background-color: #f9fafb;
	}

	.bg-card {
		background-color: #ffffff;
	}

	.border-border {
		border-color: #e5e7eb;
	}

	.text-foreground {
		color: #111827;
	}

	.text-muted-foreground {
		color: #6b7280;
	}

	/* Updated hover color for modern card-based layout */
	a:hover h2 {
		color: #007bff;
	}
</style>
