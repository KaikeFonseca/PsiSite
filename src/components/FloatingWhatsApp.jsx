import { MessageCircle } from "lucide-react";

const whatsappLink = "https://wa.me/5515991854500";

function FloatingWhatsApp() {
	return (
		<a
			href={whatsappLink}
			target="_blank"
			rel="noreferrer"
			aria-label="Agendar atendimento pelo WhatsApp"
			className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sage-600 text-white shadow-soft shadow-sage-600/30 transition duration-300 hover:-translate-y-1 hover:bg-sage-500 motion-safe:animate-pulse sm:bottom-6 sm:right-6"
		>
			<MessageCircle className="h-7 w-7" />
		</a>
	);
}

export default FloatingWhatsApp;
