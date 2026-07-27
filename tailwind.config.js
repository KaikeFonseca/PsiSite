/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				sand: {
					50: "#fbf8f3",
					100: "#f4ede4",
					200: "#e8dccb",
				},
				clay: {
					500: "#c97d63",
					600: "#b86950",
				},
				sage: {
					500: "#8fa38e",
					600: "#748a73",
				},
				ink: "#2f2a27",
			},
			boxShadow: {
				soft: "0 18px 50px rgba(47, 42, 39, 0.08)",
			},
			backgroundImage: {
				"hero-texture":
					"radial-gradient(circle at top left, rgba(201, 125, 99, 0.16), transparent 30%), radial-gradient(circle at bottom right, rgba(143, 163, 142, 0.18), transparent 34%)",
			},
		},
	},
	plugins: [],
};
