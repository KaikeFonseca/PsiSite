import { getPostField, getPosts } from "../lib/strapi";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gigliollapsi.com";

export default async function sitemap() {
	const posts = await getPosts();

	return [
		{
			url: siteUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${siteUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		...posts.flatMap((post) => {
			const slug = getPostField(post, "slug");
			return slug
				? [{
						url: `${siteUrl}/blog/${slug}`,
						lastModified: getPostField(post, "updatedAt") || new Date(),
						changeFrequency: "monthly",
						priority: 0.7,
					}]
				: [];
		}),
	];
}