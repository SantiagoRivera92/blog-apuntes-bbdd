<script lang="ts">
	import type { PageData } from './$types';
	import type { BlogPost } from '$lib/types/blog';
	import PostHeader from '$lib/components/PostHeader.svelte';
	import PostContent from '$lib/components/PostContent.svelte';
	import BackToTopButton from '$lib/components/BackToTopButton.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	const post: BlogPost = data.post;
	let btn: HTMLButtonElement;
	let back: HTMLAnchorElement;
</script>

<svelte:head>
	<title>{post.metadata.title}</title>
	<meta name="description" content={post.metadata.description || 'Blog Post'} />
</svelte:head>

<div class="min-h-screen bg-background">
	<div class="mx-auto max-w-4xl px-6 py-12">
		<a
			href="/"
			class="group mb-8 inline-flex items-center gap-2 font-medium text-accent transition-colors hover:text-accent/80"
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

		<article class="prose prose-lg max-w-none prose-stone">
			<PostHeader {post} />
			<PostContent content={post.content} />
		</article>
		<BackToTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
	</div>
</div>
