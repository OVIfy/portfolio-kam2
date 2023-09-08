/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"my-red": '#E5322E',
				"my-green": "#1DB954",
				"my-blue": "#034694",
				"my-gray": {
					"dark" : "#7D7D7D",
					"normal" : "#B4B4B4",
					"light" : "#EEEEEE",
				},
				"primary-color":"black",
				"secondary-color":"gray",
				"neutral-color" : colors.gray[400],
				'horror-primary-color' : 'black',
				'horror-secondary-color' : 'white',
				'horror-neutral-color': '#E5322E',
				'horror-spotify-green': '#215D1F',
				'horror-grade': '#151515',
			},

			fontFamily:{
				"hand-dancing": ['Dancing Script', 'cursive'],
				"SIFU" : 'SF',
				"bilal": ["bilal", 'cursive'],
				"hand-petit" : ['Petit Formal Script', "cursive"],
				"hand-sofia" : ['Sofia', "serif"],
				"hand-arizona": ['Arizonia', 'cursive'],
				"hand-vibes": ['Great Vibes', 'cursive'],
				"hand-saint": ['Mrs Saint Delafield', 'cursive'],
				"hand-dancing": ['Dancing Script', 'cursive'],
				"bilal": ["bilal", 'cursive'],
				"cookie": ["cookie", 'cursive'],
				sans: ['SF','Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 'sans-serif'],
				bloody : ['bloody', 'cursive'],
				cloud : ['melted','Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 'sans-serif']
			}
		},
	},
	plugins: [],
}
