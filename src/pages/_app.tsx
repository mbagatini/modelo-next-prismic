import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/Global';
import theme from '@/styles/themes';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}