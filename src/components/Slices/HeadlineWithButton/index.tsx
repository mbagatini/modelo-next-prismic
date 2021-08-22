import { RichText } from 'prismic-reactjs';

interface ComponentDTO {
	slice: any;
}

const HeadlineWithButton: React.FC<ComponentDTO> = ({ slice }: ComponentDTO) => (
	<section className="headline-with-button">
		<div>
			{RichText.render(slice.primary.headline || [])}
			{RichText.render(slice.primary.description || [])}
		</div>
		<div className="button">
			{slice.primary.button ? (
				<img
					src={slice.primary.button.url}
					alt={slice.primary.button.alt || ''}
				/>
			) : (
				<img alt="" />
			)}
		</div>
	</section>
);

export default HeadlineWithButton;
