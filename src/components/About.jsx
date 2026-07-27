import fernandaSecondPhoto from "../assets/fernanda-psi.jpeg";

function About() {
	return (
		<section className="mx-auto w-full max-w-6xl px-5 pb-6 sm:px-8 lg:px-10 lg:pb-10">
			<div className="grid gap-8 rounded-[2rem] bg-white/70 p-6 shadow-soft backdrop-blur-sm lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
				<div className="order-2 flex items-center justify-center lg:order-1">
					<div className="w-full max-w-sm rounded-[2rem] border border-sand-200 bg-sand-50 p-4">
						<div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-sand-300 bg-sand-100">
							<img
								src={fernandaSecondPhoto}
								alt="Fernanda Gigliolla, Psicanalista"
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
				</div>

				<div className="order-1 flex flex-col justify-center space-y-5 text-center lg:order-2 lg:text-left">
					<p className="text-sm font-semibold uppercase tracking-[0.22em] text-sage-600">
						Sobre mim
					</p>
					<h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
						Um cuidado que acolhe sem pressa e sem julgamentos
					</h2>
					<p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
						Sou Fernanda Gigliolla, Psicanalista dedicada a ajudar pessoas a
						resgatarem sua autonomia emocional, especialmente após vivenciarem
						relacionamentos abusivos. Estou aqui para te ouvir sem julgamentos.
					</p>
					<div className="grid gap-4 sm:grid-cols-3">
						{["Escuta qualificada", "Ambiente seguro", "Cuidado contínuo"].map(
							(item) => (
								<div
									key={item}
									className="rounded-2xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-stone-600"
								>
									{item}
								</div>
							),
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
