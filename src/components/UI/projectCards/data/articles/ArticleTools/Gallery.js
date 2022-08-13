import { AnimateSection } from './ArticleTemplate/AnimateSection';
import classes from './Gallery.module.css';
import { GalleryImage } from './GalleryImage';

export const Gallery = ({ images }) => {
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
