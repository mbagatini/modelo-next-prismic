import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 1rem;
	}

	body {
		font-family: 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
		scroll-behavior: smooth;
	}

	body, input, button, textarea {
		font-family: Raleway, sans-serif;
	}

	button {
		cursor: pointer;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`;
