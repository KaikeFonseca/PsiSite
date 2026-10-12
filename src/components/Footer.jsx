import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";
import ConversionLink from "./ConversionLink";

const whatsappLink = "https://wa.me/5515991854500";
const instagramLink = "https://instagram.com/fernanda_gigliolla";

function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="mx-auto w-full max-w-6xl px-5 pb-10 pt-8 sm:px-8 lg:px-10">
			<div className="flex flex-col items-center justify-between gap-4 rounded-[1.75rem] border border-sand-200 bg-white/75 px-6 py-5 text-center shadow-soft sm:flex-row sm:text-left">
				<div>
					<p className="text-base font-semibold text-ink">Fernanda Gigliolla</p>
					<p className="text-sm text-stone-500">Psicanalista | {year}</p>
				</div>

				<div className="flex items-center gap-3">
					<Link
						href="/blog"
						className="text-sm font-medium text-stone-600 transition hover:text-clay-600"
					>
						Blog
					</Link>
					<a
						href={instagramLink}
						target="_blank"
						rel="noreferrer"
						aria-label="Instagram"
						className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-200 bg-sand-50 text-stone-600 transition hover:border-clay-500/30 hover:text-clay-600"
					>
						<Instagram className="h-5 w-5" />
					</a>
					<ConversionLink
						href={whatsappLink}
						target="_blank"
						rel="noreferrer"
						aria-label="WhatsApp"
						className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-200 bg-sand-50 text-stone-600 transition hover:border-clay-500/30 hover:text-clay-600"
					>
						<MessageCircle className="h-5 w-5" />
					</ConversionLink>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
