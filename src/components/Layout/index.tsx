import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LayoutDTO {
	menu: any;
}

const Layout: React.FC<LayoutDTO> = ({ menu, children }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<link rel="icon" href="/favicon.png" type="image/png" />
			</Head>
			<Header menu={menu} />
			<main>{children}</main>
			<Footer />
		</>
	);
}

export default Layout;