//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-netlify';
//import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex'
import sveltePreprocess from 'svelte-preprocess';
import urls from 'rehype-urls'


function processUrl(url, node) {
	if (node.tagName === "a") {
		if(url.host !== "internal.site"){
			node.properties.target = "_blank"
		}
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// Set the base path where the app will live here (starting but not ending with a '/')
		paths: {base: ''}
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
		sveltePreprocess(),
		mdsvex({
		  extensions: ['.md'],
		  rehypePlugins: [[urls, processUrl]]
		})
	  ]
};

export default config;
