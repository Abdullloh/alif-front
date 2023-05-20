/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		borderRadius: {
			inpRadius: 8,
			pagePart: 10,
		},
		fontSize: {
			headSize: '18px',
		},
		colors: {
			blueColor: '#0084FF',
		},
	},
	plugins: [],
};
