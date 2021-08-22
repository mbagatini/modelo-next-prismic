import { GetStaticProps } from 'next';
import { Client } from '@/utils/prismicHelpers';

import Layout from '@/components/Layout';
import SliceZone from '@/components/SliceZone';

interface OutraPaginaProps {
	doc: any,
	menu: any,
}

export default function OutraPagina({ doc, menu }: OutraPaginaProps) {
	return (
		<Layout menu={menu}>
			<p>Outra pagina. Abaixo será exibido o conteúdo do prismic</p>
			<SliceZone sliceZone={doc.data.body} />
		</Layout>
	)
}

export const getStaticProps: GetStaticProps<OutraPaginaProps> = async () => {
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
