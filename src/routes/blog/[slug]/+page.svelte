<script lang="ts">
    import type { PageData } from './$types'; 
    import type { BlogPost } from '$lib/types/blog';

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();
    const post: BlogPost = data.post;
    let btn: HTMLButtonElement;
    let back: HTMLAnchorElement
</script>

<svelte:head>
    <title>{post.metadata.title}</title>
    <meta name="description" content={post.metadata.description || 'Blog Post'} />
</svelte:head>

<div class="min-h-screen bg-background">
    <div class="max-w-4xl mx-auto px-6 py-12">
        <a href="/" class="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium mb-8 transition-colors group"
        
        onmouseenter={() => back.classList.add('back-hover')}
        onmouseleave={() => back.classList.remove('back-hover')}
        bind:this={back}
        >
            <svg class="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Volver al índice
        </a>

        <article class="prose prose-stone prose-lg max-w-none">
            <header class="mb-8 pb-8 border-b border-border">
                <h1 
                    class="text-2xl font-bold text-foreground mb-4 tracking-tight text-balance"
                    style={`view-transition-name: post-title-${post.metadata.slug}`}
                >
                    {post.metadata.title}
                </h1>
                <div class="flex items-center gap-3 text-muted-foreground mt-1">
                    <span 
                        class="text-sm text-muted-foreground" 
                        style={`view-transition-name: post-author-${post.metadata.slug}`}
                    >
                        {post.metadata.author}
                    </span>
                    <span class="text-border" style={`view-transition-name: post-sep-${post.metadata.slug}`}>•</span>
                    <time class="text-sm font-medium text-muted-foreground" style={`view-transition-name: post-date-${post.metadata.slug}`}>
                        {new Date(post.metadata.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}
                    </time>
                </div>
            </header>

            <div class="prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-foreground/90 prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-code:text-accent prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted prose-pre:border prose-pre:border-border">
                <post.content />
            </div>
        </article>
        <div class="flex justify-center mt-16">
            <button
                class="px-6 py-2 rounded-full bg-accent text-accent-foreground font-semibold shadow-card transition-all duration-200 cursor-pointer"
                onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style="will-change: transform, box-shadow;"
                onmouseenter={() => btn.classList.add('glow')}
                onmouseleave={() => btn.classList.remove('glow')}
                bind:this={btn}
            >
                ↑ Volver arriba
            </button>
        </div>
<style>
    .glow {
        transform: scale(1.02);
        box-shadow: 0 0 0 0.35rem rgba(15, 118, 110, 0.25), 0 4px 24px 0 rgba(0,0,0,0.08);
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .back-hover {
        transform: scale(1.05);
        transition: transform 0.2s, box-shadow 0.2s;
    }
</style>
    </div>
</div>