/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				// Simple 16 column grid
				'blog': '256px 1fr',
			},
			gridTemplateRows: {
				'blog': '100px 1fr',
			}
		},
	},
	plugins: [],
}
