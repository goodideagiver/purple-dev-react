import roadmapper1 from '../../../../../assets/img/welcome/roadmapper1.png';
import roadmapper2 from '../../../../../assets/img/welcome/roadmapper2.png';
import roadmapper3 from '../../../../../assets/img/welcome/roadmapper3.png';
import { ArticleTemplate } from './ArticleTools/ArticleTemplate/ArticleTemplate';

import { Gallery } from './ArticleTools/Gallery';

const images = [
	{ src: roadmapper1 },
	{ src: roadmapper2 },
	{ src: roadmapper3 },
];

export const Roadmapper = () => {
	return (
		<>
			<Gallery images={images} />
			<ArticleTemplate
				technologies={[
					'React',
					'TypeScript',
					'React Transition Group',
					'Redux + toolkit',
					'Jest',
					'Parcel',
				]}
			/>
		</>
	);
};
