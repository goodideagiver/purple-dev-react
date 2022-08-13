import { AnimateSection } from './AnimateSection';

export const ArticleSection = ({ sectionName, children }) => {
	return (
		<AnimateSection>
			<h3>{sectionName}</h3>
			{children}
		</AnimateSection>
	);
};
