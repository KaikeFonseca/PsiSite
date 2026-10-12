import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostCover, getPostField, getStrapiMediaUrl } from "../../../lib/strapi";

export const dynamicParams = true;

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	if (!post) {
		return {};
	}

	const title = getPostField(post, "title");
	const description = getPostField(post, "seoDescription") || getPostField(post, "excerpt");

	return {
		title: getPostField(post, "seoTitle") || title,
		description,
		alternates: {
			canonical: getPostField(post, "canonicalUrl") || `/blog/${slug}`,
		},
		openGraph: {
			title,
			description,
			type: "article",
		},
	};
}

function renderContent(content) {
	if (Array.isArray(content)) {
		return content.map((block, index) => (
			<p key={block.id || index}>{block.children?.map((child) => child.text).join("")}</p>
		));
	}

	return String(content || "")
		.split(/\n{2,}/)
		.filter(Boolean)
		.map((paragraph) => <p key={paragraph}>{paragraph}</p>);
}

export default async function BlogPostPage({ params }) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	if (!post) {
		notFound();
	}

	const title = getPostField(post, "title");
	const cover = getPostCover(post);
	const coverUrl = getStrapiMediaUrl(cover);
	const description = getPostField(post, "seoDescription") || getPostField(post, "excerpt");
	const publishedAt = getPostField(post, "publishedAt");
	const updatedAt = getPostField(post, "updatedAt");
	const canonical = getPostField(post, "canonicalUrl") || `https://www.gigliollapsi.com/blog/${slug}`;

	return (
		<main className="mx-auto min-h-screen w-full max-w-3xl px-5 py-16 sm:px-8">
			<Script id="article-structured-data" type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Article",
					headline: title,
					description,
					mainEntityOfPage: canonical,
					datePublished: publishedAt,
					dateModified: updatedAt || publishedAt,
					author: {
						"@type": "Person",
						name: getPostField(post, "authorName") || "Fernanda Gigliolla",
					},
				})}
			</Script>
			<article>
				<header className="space-y-5">
					<p className="text-sm font-semibold uppercase tracking-[0.22em] text-sage-600">
						{getPostField(post, "authorName") || "Fernanda Gigliolla"}
					</p>
					<h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
						{title}
					</h1>
					<p className="text-lg leading-8 text-stone-600">
						{getPostField(post, "excerpt")}
					</p>
				</header>

				{coverUrl ? (
					<div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-sand-100">
						<Image
							src={coverUrl}
							alt={getPostField(post, "coverAlt") || title}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 768px"
						/>
					</div>
				) : null}

				<div className="prose prose-stone mt-10 max-w-none space-y-6 text-lg leading-8">
					{renderContent(getPostField(post, "content"))}
				</div>
			</article>
		</main>
	);
}