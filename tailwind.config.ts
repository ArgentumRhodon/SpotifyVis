import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			boxShadow: {
				focus: '0 0 0 3px hsl(220, 100%, 60%)'
			}
		}
	},
	plugins: [
		skeleton({
			themes: {
				preset: [
					{
						name: 'skeleton',
						enhancements: true
					},
					{
						name: 'wintry',
						enhancements: true
					},
					{
						name: 'modern',
						enhancements: true
					},
					{
						name: 'hamlindigo',
						enhancements: true
					},
					{
						name: 'rocket',
						enhancements: true
					},
					{
						name: 'sahara',
						enhancements: true
					},
					{
						name: 'gold-nouveau',
						enhancements: true
					},
					{
						name: 'vintage',
						enhancements: true
					},
					{
						name: 'seafoam',
						enhancements: true
					},
					{
						name: 'crimson',
						enhancements: true
					}
				]
			}
		})
	]
} satisfies Config;
