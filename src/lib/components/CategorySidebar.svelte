
<script lang="ts">
	import CategoryIndex from './CategoryIndex.svelte';
	export let categories: string[] = [];
		export let posts: Array<{
			slug: string;
			title: string;
			date: string;
			author?: string;
			categories?: string[];
		}> = [];
</script>

<nav aria-label="Índice de categorías" class="category-sidebar flex flex-col gap-8">
		{#each categories as category}
			<CategoryIndex posts={posts} currentCategory={category} currentSlug="" />
		{/each}
</nav>