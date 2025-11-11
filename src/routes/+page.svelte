<script lang="ts">
	import type { PageData } from './$types';
	import BlogPost from '$lib/components/BlogPost.svelte';
	import CategorySidebar from '$lib/components/CategorySidebar.svelte';

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
	<div class="mx-auto max-w-6xl px-6 py-16">
		<header class="mb-8">
			<h1 class="mb-3 text-5xl font-bold tracking-tight text-foreground">Blog DAW</h1>
			<p class="text-lg text-muted-foreground">Apuntes de DAW</p>
		</header>
		<!-- Category index: top on mobile, sidebar on desktop -->
		<div class="flex flex-col gap-8 md:flex-row">
			<!-- Mobile: collapsible category sidebar -->
			<details class="mb-8 md:hidden">
				<summary class="cursor-pointer font-semibold text-interactive"
					>Ver índice de categorías</summary
				>
				<div class="mt-6">
					<CategorySidebar categories={data.categories} posts={data.posts} />
				</div>
			</details>
			<div class="flex-1">
				<div class="grid grid-cols-1 gap-8">
					{#each data.posts as post}
						<article class="group">
							<BlogPost {post} />
						</article>
					{/each}
				</div>
			</div>
			<aside class="hidden md:block md:w-64">
				<CategorySidebar categories={data.categories} posts={data.posts} />
			</aside>
		</div>
	</div>
</div>
