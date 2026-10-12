import Link from "next/link";
import { getPostCategory, getPostCover, getPostField, getPosts, getStrapiMediaUrl } from "../../lib/strapi";
import Image from "next/image";

export const metadata = {
	title: "Blog | Fernanda Gigliolla",
	description: "Reflexões sobre psicanálise, autonomia emocional e relacionamentos.",
	alternates: { canonical: "/blog" },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function BlogPage() {
	const posts = await getPosts();

	return (
		<main className="mx-auto min-h-screen w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
			<div className="max-w-3xl space-y-4">
				<p className="text-sm font-semibold uppercase tracking-[0.22em] text-sage-600">
					Conteúdos para você
				</p>
				<h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
					Blog
				</h1>
				<p className="text-lg leading-8 text-stone-600">
					Reflexões e informações para apoiar seu processo de cuidado emocional.
				</p>
			</div>

			{posts.length > 0 ? (
				<div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{posts.map((post) => {
						const title = getPostField(post, "title");
						const slug = getPostField(post, "slug");
						const excerpt = getPostField(post, "excerpt");
						const coverUrl = getStrapiMediaUrl(getPostCover(post));
						const category = getPostCategory(post);

						return (
							<article
								key={post.documentId || post.id || slug}
								className="overflow-hidden rounded-[1.5rem] border border-sand-200 bg-white/75 shadow-soft"
							>
								{coverUrl ? (
									<div className="relative aspect-[16/10] bg-sand-100">
										<Image
											src={coverUrl}
											alt={getPostField(post, "coverAlt") || title}
											fill
											className="object-cover"
											sizes="(max-width: 768px) 100vw, 33vw"
										/>
									</div>
								) : null}
								<div className="space-y-4 p-6">
									{category ? (
										<p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-600">
											{getPostField(category, "name")}
										</p>
									) : null}
									<h2 className="text-2xl font-semibold text-ink">{title}</h2>
									<p className="leading-7 text-stone-600">{excerpt}</p>
									<Link
										href={`/blog/${slug}`}
										className="inline-flex font-medium text-clay-600 hover:text-clay-500"
									>
										Ler artigo
									</Link>
								</div>
							</article>
						);
					})}
				</div>
			) : (
				<p className="mt-12 rounded-2xl border border-sand-200 bg-white/70 p-6 text-stone-600">
					Os primeiros conteúdos serão publicados em breve.
				</p>
			)}
		</main>
	);
}