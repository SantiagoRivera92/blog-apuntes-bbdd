import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex'; // Import mdsvex

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // !!! IMPORTANT: List .md and .svx here !!!
    extensions: ['.svelte', '.svx', '.md'], // <--- Ensure these are here

    preprocess: [
        vitePreprocess(),
        mdsvex({
            // !!! IMPORTANT: List .md and .svx here again !!!
            extensions: ['.svx', '.md'], // <--- And here
        }),
    ],

    kit: {
        adapter: adapter(),
    },
};

export default config;