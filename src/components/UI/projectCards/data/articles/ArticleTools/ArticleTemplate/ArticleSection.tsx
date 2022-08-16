import { ReactNode } from 'react';
import { AnimateSection } from './AnimateSection';

type GalleryProps = {
	sectionName: string;
	children: ReactNode;
};

export const ArticleSection = ({ sectionName, children }: GalleryProps) => {
	return (
		<AnimateSection>
			<h3>{sectionName}</h3>
			{children}
		</AnimateSection>
	);
};
