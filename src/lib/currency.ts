export const currency = [
	{ text: 'US Dollars', value: 'USD' },
	{ text: 'Philippine Peso', value: 'PHP' },
];

export function getCurrencySymbol(
	locale: string | undefined = undefined,
	currency: string
) {
	return (0)
		.toLocaleString(locale, {
			style: 'currency',
			currency: currency,
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		})
		.replace(/\d/g, '')
		.trim();
}
