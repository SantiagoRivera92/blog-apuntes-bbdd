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
    <div class="max-w-4xl mx-auto px-6 py-16">
        <!-- Added modern header with better typography -->
        <header class="mb-16">
            <h1 class="text-5xl font-bold text-foreground mb-3 tracking-tight">Blog DAW</h1>
            <p class="text-lg text-muted-foreground">Apuntes de Bases de Datos</p>
        </header>

        <!-- Replaced basic list with modern card-based layout -->
        <div class="space-y-8">
            {#each data.posts as post}
                <article class="group">
                    <a href="/blog/{post.slug}" class="block">
                        <div class="bg-card border border-border rounded-lg p-8 transition-all duration-200 hover:shadow-lg hover:border-accent/50">
                            <time class="text-sm text-muted-foreground font-medium">
                                {new Date(post.date).toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}
                            </time>
                            <h2 class="text-2xl font-semibold text-foreground mt-3 mb-2 group-hover:text-accent transition-colors text-balance">
                                {post.title}
                            </h2>
                            <p class="text-muted-foreground text-sm">By {post.author}</p>
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
