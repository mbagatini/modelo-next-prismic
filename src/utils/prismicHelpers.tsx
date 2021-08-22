import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';
import Link from 'next/link';

import { apiEndpoint, hrefResolver, accessToken } from '@/../prismic-configuration';

// Helper function to get the Prismic repository name from the URL
export const prismicRepoName = apiEndpoint.match(/https?:\/\/([^.]+)?\.(cdn\.)?.+/);

// Helper function to convert Prismic Rich Text links to Next/Link components
export function customLink(element: any, content: any) {
	return (
		<Link key={element.data.id} href={hrefResolver(element.data)} >
			<a>{content}</a>
		</Link>
	);
};

// Client method to query documents from the Prismic repo
export const Client = (req = null): DefaultClient => {
	return Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
};

const createClientOptions = (req = null, prismicAccessToken: string | null = null) => {
	const reqOption = req ? { req } : {};
	const accessTokenOption = prismicAccessToken
		? { accessToken: prismicAccessToken }
		: {};

	return {
		...reqOption,
		...accessTokenOption,
	};
};