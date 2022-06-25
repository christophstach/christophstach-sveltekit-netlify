import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import * as path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		vite: {
			plugins: [],
			resolve: {
				alias: {
					$components: path.resolve('src/components'),
					$routes: path.resolve('src/routes')
				}
			}
		},
		adapter: adapter({
			edge: true,
			split: false
		})
	}
};

export default config;
