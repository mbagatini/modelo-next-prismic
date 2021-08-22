import {
	HeadlineWithButton,
} from '@/components/Slices';

interface ComponentDTO {
	sliceZone: any[];
}

const SliceZone: React.FC<ComponentDTO> = ({ sliceZone }: ComponentDTO) => {
	return (
		<div>
			{sliceZone.map((slice: any, index: number) => {
				switch (slice.slice_type) {
					case 'headline_with_button':
						return <HeadlineWithButton slice={slice} key={`slice-${index}`} />;
					default:
						return null;
				}
			})}
		</div>
	);
};

export default SliceZone;
