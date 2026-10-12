import "../index.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gigliollapsi.com";

export const metadata = {
	metadataBase: new URL(siteUrl),
	title: "Psicanalista em Sorocaba | Fernanda Gigliolla",
	description:
		"Psicanálise em Sorocaba e atendimento online com Fernanda Gigliolla. Um espaço acolhedor para autonomia emocional, escuta e relacionamentos mais saudáveis.",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Psicanalista em Sorocaba | Fernanda Gigliolla",
		description:
			"Psicanálise em Sorocaba e atendimento online com Fernanda Gigliolla.",
		url: siteUrl,
		siteName: "Fernanda Gigliolla",
		locale: "pt_BR",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Psicanalista em Sorocaba | Fernanda Gigliolla",
		description:
			"Psicanálise em Sorocaba e atendimento online com Fernanda Gigliolla.",
	},
	keywords: [
		"psicanalista",
		"psicanalista em Sorocaba",
		"psicanálise em Sorocaba",
		"atendimento online",
		"terapia online em Sorocaba",
		"autonomia emocional",
		"relacionamentos abusivos",
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="pt-BR">
			<body className="antialiased">
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Fernanda Gigliolla",
							jobTitle: "Psicanalista",
							url: siteUrl,
							areaServed: {
								"@type": "City",
								name: "Sorocaba",
								addressCountry: "BR",
							},
							knowsAbout: [
								"Psicanálise",
								"Autonomia emocional",
								"Relacionamentos abusivos",
							],
							sameAs: ["https://instagram.com/fernanda_gigliolla"],
						}),
					}}
				/>
				{children}
			</body>
		</html>
	);
}
