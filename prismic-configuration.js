module.exports = {

	// -- Prismic API endpoint
	// Determines which repository to query and fetch data from
	// Configure your site's access point here
	apiEndpoint: 'https://augusto.prismic.io/api/v2',

	// -- Access Token if the repository is not public
	// Generate a token in your dashboard and configure it here if your repository is private
	accessToken: 'MC5ZU0ZxMVJBQUFDRUFhRTdv.Yu-_vXx_77-9HTka77-9Qh46Fu-_vQjvv70cQlk077-9Ae-_vX7vv73vv73vv71W77-977-9XO-_vQ',

	// -- Link resolution rules
	// Manages links to internal Prismic documents
	// Modify as your project grows to handle any new routes you've made
	linkResolver: function (doc) {
		if (doc.type === 'page') {
			return `/${doc.uid}`;
		}
		if (doc.type === 'homepage') {
			return ``;
		}
		return '/';
	},

	// Additional helper function for Next/Link component
	hrefResolver: function (doc) {
		if (doc.type === 'page') {
			return `/${doc.uid}`;
		}
		if (doc.type === 'homepage') {
			return ``;
		}
		return `${doc.url}`;
	},
}
