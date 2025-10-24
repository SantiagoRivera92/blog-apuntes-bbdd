<script lang="ts">
		export let posts: Array<{
			slug: string;
			title: string;
			date: string;
			author?: string;
			categories?: string[];
		}> = [];
	export let currentCategory: string;
	export let currentSlug: string;

	$: filtered = posts
		.filter((post) => (post.categories ?? []).includes(currentCategory))
		.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
</script>

{#if filtered.length > 0}
	<nav aria-label="Entradas de la categoría" class="category-index">
		<h2 class="mb-2 text-lg font-semibold text-accent">Entradas en "{currentCategory}"</h2>
		<ul class="space-y-2">
			{#each filtered as post}
				<li>
					{#if post.slug === currentSlug}
						<span class="block text-base font-medium text-accent">
							{post.title}
						</span>
					{:else}
						<a
							href={`/blog/${post.slug}`}
							class="block font-medium text-foreground transition-colors hover:text-interactive"
						>
							<span class="text-base">{post.title}</span>
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
{/if}
