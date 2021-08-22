import 'styled-components';

declare module 'styled-components' {
	/**
	 * Sobrescreve o tema default do styled-components
	 * A vantagem de criar o arquivo styled.d.ts é que não é necessário realizar a importação
	 * da interface de tipagem do tema em cada lugar que for utilizar as propriedades do tema
	 * */
	export interface DefaultTheme {
		title: string,

		colors: {
			primary: string,
			secondary: string,
			error: string,

			textBody: string,
			textHeader: string,

			background: string,

			disabled: string,
			lightGray: string,
		}
	}
}
