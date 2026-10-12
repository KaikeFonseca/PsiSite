"use client";

let gtagPromise;

function loadGoogleAds() {
	if (gtagPromise) {
		return gtagPromise;
	}

	gtagPromise = new Promise((resolve) => {
		window.dataLayer = window.dataLayer || [];
		window.gtag = function gtag() {
			window.dataLayer.push(arguments);
		};
		window.gtag("js", new Date());
		window.gtag("config", "AW-18361193094");

		const script = document.createElement("script");
		script.async = true;
		script.src = "https://www.googletagmanager.com/gtag/js?id=AW-18361193094";
		script.onload = resolve;
		document.head.appendChild(script);
	});

	return gtagPromise;
}

export default function ConversionLink({ children, ...props }) {
	async function handleConversion(event) {
		event.preventDefault();
		const destination = props.href;
		const newWindow = props.target === "_blank" ? window.open(destination, "_blank") : null;

		await loadGoogleAds();
		window.gtag("event", "conversion", {
			send_to: "AW-18361193094/1eHlCLP4uNkcEIalprNE",
			value: 1.0,
			currency: "BRL",
		});

		if (newWindow) {
			newWindow.opener = null;
		} else {
			window.location.href = destination;
		}
	}

	return (
		<a {...props} onClick={handleConversion}>
			{children}
		</a>
	);
}
