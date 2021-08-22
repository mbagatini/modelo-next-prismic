import { GetStaticProps } from 'next';
import { Client } from '@/utils/prismicHelpers';

import Layout from '@/components/Layout';
import SliceZone from '@/components/SliceZone';

interface HomeProps {
	doc: any,
	menu: any,
}

export default function Home({ doc, menu }: HomeProps) {
	return (
		<Layout menu={menu}>
			<p>Abaixo será exibido o conteúdo do prismic</p>
			<SliceZone sliceZone={doc.data.body} />
		</Layout>
	)
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const client = Client();

	const doc = (await client.getSingle('homepage', {})) || {};
	const menu = (await client.getSingle('top_menu', {})) || {};

	return {
		props: {
			menu,
			doc,
		},
		revalidate: false,
	}
}
