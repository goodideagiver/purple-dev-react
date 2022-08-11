import roadmapper1 from '../../../../../assets/img/welcome/roadmapper1.png';
import roadmapper2 from '../../../../../assets/img/welcome/roadmapper2.png';
import roadmapper3 from '../../../../../assets/img/welcome/roadmapper3.png';

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
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
				architecto beatae, debitis commodi eum, voluptatum quia amet officiis
				autem a voluptatibus iusto dolorum quaerat, necessitatibus deleniti
				sequi quam aliquam eius!
			</p>
		</>
	);
};
