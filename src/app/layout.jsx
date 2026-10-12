import Script from "next/script";
import "../index.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gigliollapsi.com";

export const metadata = {
	metadataBase: new URL(siteUrl),
	title: "Fernanda Gigliolla | Psicanalista",
	description:
		"Atendimento psicanalítico acolhedor para quem busca autonomia emocional e superação de relacionamentos abusivos.",
	 alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Fernanda Gigliolla | Psicanalista",
		description:
			"Atendimento psicanalítico acolhedor para quem busca autonomia emocional e superação de relacionamentos abusivos.",
		url: siteUrl,
		siteName: "Fernanda Gigliolla",
		locale: "pt_BR",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Fernanda Gigliolla | Psicanalista",
		description:
			"Atendimento psicanalítico acolhedor para quem busca autonomia emocional e superação de relacionamentos abusivos.",
	},
	keywords: [
		"psicanalista",
		"atendimento online",
		"autonomia emocional",
		"relacionamentos abusivos",
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="pt-BR">
			<body className="antialiased">
				<Script
					id="professional-structured-data"
					type="application/ld+json"
					strategy="beforeInteractive"
				>
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Person",
						name: "Fernanda Gigliolla",
						jobTitle: "Psicanalista",
						url: siteUrl,
						sameAs: ["https://instagram.com/fernanda_gigliolla"],
					})}
				</Script>
				<Script
					strategy="afterInteractive"
					src="https://www.googletagmanager.com/gtag/js?id=AW-18361193094"
				/>
				<Script id="google-ads-gtag" strategy="afterInteractive">
					{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18361193094');
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-18361193094/1eHlCLP4uNkcEIalprNE',
      'value': 1.0,
      'currency': 'BRL',
      'event_callback': callback
  });
  return false;
}
window.gtag_report_conversion = gtag_report_conversion;`}
				</Script>
				{children}
			</body>
		</html>
	);
}
