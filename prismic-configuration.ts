// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = 'https://URL.prismic.io/api/v2';

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = 'TOKEN';

// -- Link resolution rules
// Manages links to internal Prismic documents
// Modify as your project grows to handle any new routes you've made
export function linkResolver(doc: any) {
	if (doc.type === 'page') {
		return `/${doc.uid}`;
	}
	if (doc.type === 'homepage') {
		return ``;
	}
	return '/';
}

// Additional helper function for Next/Link component
export function hrefResolver(doc: any) {
	if (doc.type === 'page') {
		return `/${doc.uid}`;
	}
	if (doc.type === 'homepage') {
		return ``;
	}
	return `${doc.url}`;
}
