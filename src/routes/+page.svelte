<script lang="ts">
	import type { PageData } from './$types';
	import BlogPost from '$lib/components/BlogPost.svelte';

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
					<BlogPost {post} />
				</article>
			{/each}
		</div>
	</div>
</div>
