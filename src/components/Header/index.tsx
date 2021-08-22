import { default as NextLink } from 'next/link';
import { RichText, RichTextBlock, Link } from 'prismic-reactjs';
import { hrefResolver } from '@/../prismic-configuration';

interface LinkDTO {
	link: Link;
	label: RichTextBlock[];
}

interface HeaderDTO {
	menu: any;
}

const Header: React.FC<HeaderDTO> = ({ menu }: HeaderDTO) => {
	return (
		<header>
			<NextLink href={'/'} passHref>
				<a>
					<img className="logo" src="/images/logo.png" alt="Site logo" />
				</a>
			</NextLink>
			<ul>
				{menu.data.menu_links.map((menuLink: LinkDTO) => {
					return (
						<li key={menuLink.link.id}>
							<NextLink
								href={hrefResolver(menuLink.link)}
								passHref
							>
								<a>{RichText.asText(menuLink.label)}</a>
							</NextLink>
						</li>)
				})}
			</ul>
		</header>
	);
}

export default Header;