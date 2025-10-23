<script lang="ts">
	export let onClick: () => void;
	let btn: HTMLButtonElement;
</script>

<div class="mt-16 flex justify-center">
	<button
		class="cursor-pointer rounded-full bg-accent px-6 py-2 font-semibold text-accent-foreground shadow-card transition-all duration-200"
		style="will-change: transform, box-shadow;"
		on:click={onClick}
		on:mouseenter={() => btn.classList.add('glow')}
		on:mouseleave={() => btn.classList.remove('glow')}
		bind:this={btn}
	>
		↑ Volver arriba
	</button>
</div>

<style>
	:global(.glow) {
		transform: scale(1.02);
		box-shadow:
			0 0 0 0.35rem rgba(15, 118, 110, 0.25),
			0 4px 24px 0 rgba(0, 0, 0, 0.08);
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}
</style>
