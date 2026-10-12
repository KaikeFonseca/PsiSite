import Image from "next/image";
import ConversionLink from "./ConversionLink";
import {
	ArrowRight,
	HeartHandshake,
	MessageCircle,
	Sparkles,
} from "lucide-react";
import fernandaPhoto from "../assets/foto-fernanda-psi.jpeg";
import { getPostField, getStrapiMediaUrl } from "../lib/strapi";

const whatsappLink = "https://wa.me/5515991854500";

function Hero({ content }) {
	const heroImage = getPostField(content, "heroImage");
	const imageUrl = getStrapiMediaUrl(heroImage?.data || heroImage);

	return (
		<section className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-5 py-12 sm:px-8 lg:px-10">
			<div className="grid w-full items-center gap-10 rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-soft backdrop-blur-sm sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
				<div className="space-y-8 text-center lg:text-left">
					<div className="inline-flex items-center gap-2 rounded-full border border-sand-200 bg-sand-50 px-4 py-2 text-sm text-stone-700">
						<Sparkles className="h-4 w-4 text-clay-500" />
						{getPostField(content, "heroEyebrow") ||
							"Psicanálise com acolhimento, presença e direção"}
					</div>

					<div className="space-y-5">
						<h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
							{getPostField(content, "heroTitle") ||
								"Psicanálise em Sorocaba e atendimento online para reencontrar sua própria voz"}
						</h1>
						<p className="max-w-xl text-base leading-7 text-stone-600 sm:text-lg">
							{getPostField(content, "heroDescription") ||
								"Um espaço seguro para atravessar momentos difíceis com escuta psicanalítica, cuidado humano e apoio para reconstruir sua autonomia emocional, com atendimento para pessoas em Sorocaba e também online."}
						</p>
					</div>

					<div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
						<ConversionLink
							href={whatsappLink}
							target="_blank"
							rel="noreferrer"
							className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-clay-500 px-7 py-4 text-base font-medium text-white shadow-lg shadow-clay-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-clay-600 sm:w-auto"
						>
							<MessageCircle className="h-5 w-5" />
							Agendar meu Atendimento
							<ArrowRight className="h-4 w-4" />
						</ConversionLink>
						<div className="inline-flex items-center gap-2 text-sm text-stone-500">
							<HeartHandshake className="h-4 w-4 text-sage-600" />
							Atendimento online e acolhedor
						</div>
					</div>
				</div>

				<div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none">
					<div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(143,163,142,0.18),transparent_55%)] blur-2xl" />
					<div className="w-full rounded-[2rem] border border-sand-200 bg-sand-50 p-6 shadow-soft sm:p-8">
						<div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-gradient-to-br from-sand-100 to-white p-5">
							<div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-sand-200 bg-sand-100">
								<Image
									src={imageUrl || fernandaPhoto}
									alt="Fernanda Gigliolla, Psicanalista"
									className="h-full w-full object-cover"
									priority
									sizes="(max-width: 1024px) 100vw, 40vw"
								/>
							</div>
							<div className="mt-5 space-y-3 text-left">
								<p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
									Fernanda Gigliolla
								</p>
								<p className="text-lg font-medium text-ink">
									Psicanalista em constante atualização
								</p>
								<p className="text-sm leading-6 text-stone-600">
									Um ambiente calmo, elegante e centrado em conversas que
									conduzem ao cuidado.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
