/** @type {import('next').NextConfig} */
const configuredStrapiUrl = process.env.STRAPI_URL;
const isLocalStrapiUrl = configuredStrapiUrl?.includes("localhost");
const strapiUrl = new URL(
	configuredStrapiUrl && !(process.env.NODE_ENV === "production" && isLocalStrapiUrl)
		? configuredStrapiUrl
		: process.env.NODE_ENV === "production"
			? "https://psisite-cms.onrender.com"
			: "http://localhost:1337",
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
