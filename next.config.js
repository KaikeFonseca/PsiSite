/** @type {import('next').NextConfig} */
const strapiUrl = new URL(
	process.env.STRAPI_URL ||
		(process.env.NODE_ENV === "production"
			? "https://psisite-cms.onrender.com"
			: "http://localhost:1337"),
);

const nextConfig = {
	turbopack: {
		root: process.cwd(),
	},
	images: {
		remotePatterns: [
			{
				protocol: strapiUrl.protocol.replace(":", ""),
				hostname: strapiUrl.hostname,
				port: strapiUrl.port,
				pathname: "/uploads/**",
			},
		],
	},
};

export default nextConfig;
