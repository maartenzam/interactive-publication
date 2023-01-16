//import adapter from '@sveltejs/adapter-auto';
//import adapter from '@sveltejs/adapter-netlify';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex'
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		//prerender:{default:true},
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
		sveltePreprocess(),
		mdsvex({
		  extensions: ['.md']
		})
	  ]
};

export default config;
