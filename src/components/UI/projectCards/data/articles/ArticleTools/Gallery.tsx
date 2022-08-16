import { AnimateSection } from './ArticleTemplate/AnimateSection';
import classes from './Gallery.module.css';
import { GalleryImage } from './GalleryImage';

import { Image } from './GalleryImage.types';

type GalleryProps = {
	images: Image[];
};

export const Gallery = ({ images }: GalleryProps) => {
	return (
		<AnimateSection>
			<h3 className={classes.title}>🏵️ Gallery</h3>
			<div className={classes.root}>
				{images.map((image, index) => (
					<GalleryImage image={image} key={index} />
				))}
			</div>
		</AnimateSection>
	);
};
