const strapiUrl =
	process.env.STRAPI_URL ||
	(process.env.NODE_ENV === "production"
		? "https://psisite-cms.onrender.com"
		: "http://localhost:1337");

async function strapiFetch(path) {
	const headers = {};

	if (process.env.STRAPI_API_TOKEN) {
		headers.Authorization = `Bearer ${process.env.STRAPI_API_TOKEN}`;
	}

	try {
		const response = await fetch(`${strapiUrl}${path}`, {
			headers,
			next: { revalidate: 60 },
		});

		if (!response.ok) {
			return null;
		}

		return response.json();
	} catch {
		return null;
	}
}

export async function getPosts() {
	const query = new URLSearchParams({
		"populate[cover]": "true",
		"populate[category]": "true",
		"sort[0]": "publishedAt:desc",
		"pagination[pageSize]": "20",
	});
	const result = await strapiFetch(`/api/posts?${query}`);

	return result?.data || [];
}

export async function getHomePage() {
	const query = new URLSearchParams({
		"populate[heroImage]": "true",
		"populate[aboutImage]": "true",
	});
	const result = await strapiFetch(`/api/home-page?${query}`);

	return result?.data || null;
}

export async function getServices() {
	const query = new URLSearchParams({
		"sort[0]": "order:asc",
		"pagination[pageSize]": "20",
	});
	const result = await strapiFetch(`/api/services?${query}`);

	return result?.data || [];
}

export async function getPostBySlug(slug) {
	const query = new URLSearchParams({
		"filters[slug][$eq]": slug,
		"populate[cover]": "true",
		"populate[category]": "true",
	});
	const result = await strapiFetch(`/api/posts?${query}`);

	return result?.data?.[0] || null;
}

export function getStrapiMediaUrl(media) {
	const url = media?.url || media?.data?.url;

	if (!url) {
		return null;
	}

	return url.startsWith("http") ? url : `${strapiUrl}${url}`;
}

export function getPostField(post, field) {
	return post?.attributes?.[field] ?? post?.[field];
}

export function getPostCover(post) {
	const cover = getPostField(post, "cover");
	return cover?.data || cover;
}

export function getPostCategory(post) {
	const category = getPostField(post, "category");
	return category?.data || category;
}