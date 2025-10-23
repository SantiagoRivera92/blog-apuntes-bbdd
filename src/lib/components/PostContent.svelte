<script lang="ts">
	export let content;
</script>

<div
	class="prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-foreground/90 prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-accent prose-pre:border prose-pre:border-border prose-pre:bg-muted"
>
	<svelte:component this={content} />
</div>
