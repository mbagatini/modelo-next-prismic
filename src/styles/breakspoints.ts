/*
Breakpoint				Class infix		Dimensions
X-Small					None			<576px
Small					sm				≥576px
Medium					md				≥768px
Large					lg				≥992px
Extra large				xl				≥1200px
Extra extra large		xxl				≥1400px
*/

const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px'
}

export const device = {
	min: {
		mobileS: `(min-width: ${size.mobileS})`,
		mobileM: `(min-width: ${size.mobileM})`,
		mobileL: `(min-width: ${size.mobileL})`,
		tablet: `(min-width: ${size.tablet})`,
		laptop: `(min-width: ${size.laptop})`,
		laptopL: `(min-width: ${size.laptopL})`,
		desktop: `(min-width: ${size.desktop})`,
		desktopL: `(min-width: ${size.desktop})`,
	},
	max: {
		mobileS: `(max-width: ${size.mobileS})`,
		mobileM: `(max-width: ${size.mobileM})`,
		mobileL: `(max-width: ${size.mobileL})`,
		tablet: `(max-width: ${size.tablet})`,
		laptop: `(max-width: ${size.laptop})`,
		laptopL: `(max-width: ${size.laptopL})`,
		desktop: `(max-width: ${size.desktop})`,
		desktopL: `(max-width: ${size.desktop})`,
	},
};
