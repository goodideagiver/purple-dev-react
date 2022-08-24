import qs from 'qs';

export function getStrapiURL(path: string = ''): string {
	return `${
		process.env.NEXT_PUBLIC_STRAPI_API_URL ||
		'https://sheltered-refuge-85276.herokuapp.com'
	}${path}`;
}

export async function fetchAPI(
	path: string,
	urlParamsObject = {},
	options = {}
) {
	// Merge default and user options
	const mergedOptions = {
		headers: {
			'Content-Type': 'application/json',
		},
		...options,
	};

	const queryString = qs.stringify(urlParamsObject);
	const requestUrl = `${getStrapiURL(
		`/api${path}${queryString ? `?${queryString}` : ''}`
	)}`;

	const response = await fetch(requestUrl, mergedOptions);

	if (!response.ok) {
		console.error(response.statusText);
		throw new Error(
			`An error occured please try again. Response: ${response.statusText}
			at url ${requestUrl}`
		);
	}
	const data = await response.json();
	return data;
}
