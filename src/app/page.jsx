import About from "../components/About";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";

export default function HomePage() {
	return (
		<div className="relative min-h-screen overflow-hidden bg-hero-texture text-ink">
			<div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(201,125,99,0.08),transparent_52%)]" />
			<main>
				<Hero />
				<About />
				<Services />
			</main>
			<Footer />
			<FloatingWhatsApp />
		</div>
	);
}
