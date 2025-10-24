<script lang="ts">
	import type { PageData } from './$types';
	import type { BlogPost } from '$lib/types/blog';
	import PostHeader from '$lib/components/PostHeader.svelte';
	import PostContent from '$lib/components/PostContent.svelte';
	import BackToTopButton from '$lib/components/BackToTopButton.svelte';
	import CategoryIndex from '$lib/components/CategoryIndex.svelte';

	interface Props {
		data: PageData;
	}

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let back: HTMLAnchorElement;

	$: post = $page.data.post;
	$: allPosts = $page.data.allPosts;
	$: currentCategory = post.metadata.categories?.[0] ?? '';

	// Read ?from and ?category from query string
	let backHref = '/';
	onMount(() => {
		const state = window.history.state?.usr || {};
		if (state.from === 'category' && state.category) {
			backHref = `/categories/${encodeURIComponent(state.category)}`;
		} else {
			backHref = '/';
		}
	});
</script>

<svelte:head>
	<title>{post.metadata.title}</title>
	<meta name="description" content={post.metadata.description || 'Blog Post'} />
</svelte:head>

<div class="min-h-screen bg-background">
	<div class="mx-auto max-w-4xl px-6 py-12">
		<a
			href={backHref}
			class="group mb-8 inline-flex items-center gap-2 font-medium text-interactive transition-colors hover:text-interactive/80"
			onmouseenter={() => back.classList.add('back-hover')}
			onmouseleave={() => back.classList.remove('back-hover')}
			bind:this={back}
		>
			<svg
				class="h-4 w-4 transition-transform group-hover:-translate-x-1"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
			Volver al índice
		</a>

		<div class="flex flex-col md:flex-row gap-8">
			<div class="flex-1">
				<article class="prose prose-lg max-w-none prose-stone">
					<PostHeader {post} />
				</article>
				<!-- Mobile: collapsible category index below header -->
				<details class="mb-8 block md:hidden">
					<summary class="cursor-pointer text-interactive font-semibold">Ver índice de la categoría</summary>
					<div class="mt-6">
						<CategoryIndex posts={allPosts} currentCategory={currentCategory} currentSlug={post.metadata.slug} />
					</div>
				</details>
				<article class="prose prose-lg max-w-none prose-stone">
					<PostContent content={post.content} />
				</article>
				<BackToTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
			</div>
			<!-- Desktop: category index on right -->
			<aside class="hidden md:block md:w-64">
				<CategoryIndex posts={allPosts} currentCategory={currentCategory} currentSlug={post.metadata.slug} />
			</aside>
		</div>
	</div>
</div>
