"use client";

export default function ConversionLink({ children, ...props }) {
	function handleConversion() {
		window.gtag_report_conversion?.();
	}

	return (
		<a {...props} onClick={handleConversion}>
			{children}
		</a>
	);
}
