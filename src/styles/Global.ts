import { createGlobalStyle } from 'styled-components';
import { device } from './breakspoints';

/**
 * Tipografia mobile - Major third 1.25rem
 * Tipografia desk - Perfect fourth 1.333rem
 */

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 100%; /*16px*/
		line-height: 1.5;
	}

	body {
		background: ${props => props.theme.colors.background};
		color: ${props => props.theme.colors.textBody};
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
		text-decoration: none;
		transition: 0.3s;

		&:visited, &:link {
			color: inherit;
		}

		&:hover {
			color: ${props => props.theme.colors.primary};
		}
	}

	textarea {
		resize: none;
	}

	h1, h2, h3, h4, h5, h6 {
		margin: 3rem 0 1.38rem;
		font-family: 'Poppins', sans-serif;
		text-transform: uppercase;
		font-weight: 600;
		line-height: 1.3;
	}

	h1, [aria-level="1"] {
		margin-top: 0;
		font-size: 3.052rem;
	}

	h2, [aria-level="2"] {font-size: 2.441rem;}

	h3, [aria-level="3"] {font-size: 1.953rem;}

	h4, [aria-level="4"] {font-size: 1.563rem;}

	h5, [aria-level="5"] {font-size: 1.25rem;}

	small {font-size: 0.8rem;}

	/**
	* Desk
	*/
	@media ${device.min.laptop} {
		html {
			font-size: 112.5%; /* 18px */
		}

		h1, [aria-level="1"] {
			margin-top: 0;
			font-size: 4.209rem;
		}

		h2, [aria-level="2"] {font-size: 3.157rem;}

		h3, [aria-level="3"] {font-size: 2.369rem;}

		h4, [aria-level="4"] {font-size: 1.777rem;}

		h5, [aria-level="5"] {font-size: 1.333rem;}

		small {font-size: 0.75rem;}
	}
`;
