import { CircleCheckBig, Globe2, MessageSquareHeart } from "lucide-react";
import { getPostField } from "../lib/strapi";

const services = [
	{
		title: "Sessões Online",
		description:
			"Atendimento com flexibilidade, conforto e privacidade para a sua rotina.",
		icon: Globe2,
	},
	{
		title: "Acolhimento Focado",
		description:
			"Uma condução sensível para momentos de dor, dúvida e recomeço.",
		icon: CircleCheckBig,
	},
	{
		title: "Escuta Psicanalítica",
		description:
			"Espaço de fala e elaboração para fortalecer sua autonomia emocional.",
		icon: MessageSquareHeart,
	},
];

const icons = { CircleCheckBig, Globe2, MessageSquareHeart };

function Services({ content = [] }) {
	const items = content.length > 0 ? content : services;

	return (
		<section className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8 lg:px-10 lg:py-10">
			<div className="space-y-3 text-center">
				<p className="text-sm font-semibold uppercase tracking-[0.22em] text-sage-600">
					Como posso te ajudar
				</p>
				<h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
					Uma abordagem simples, elegante e centrada em você
				</h2>
			</div>

			<div className="mt-8 grid gap-5 md:grid-cols-3">
				{items.map((service, index) => {
					const title = getPostField(service, "title");
					const description = getPostField(service, "description");
					const Icon =
						icons[getPostField(service, "icon")] ||
						services[index % services.length].icon;

					return (
					<article
						key={title}
						className="rounded-[1.75rem] border border-sand-200 bg-white/75 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-clay-500/30"
					>
						<div className="mb-5 inline-flex rounded-2xl bg-sand-50 p-3 text-clay-500">
							<Icon className="h-6 w-6" />
						</div>
						<h3 className="text-xl font-semibold text-ink">{title}</h3>
						<p className="mt-3 text-base leading-7 text-stone-600">
							{description}
						</p>
					</article>
					);
				})}
			</div>
		</section>
	);
}

export default Services;
