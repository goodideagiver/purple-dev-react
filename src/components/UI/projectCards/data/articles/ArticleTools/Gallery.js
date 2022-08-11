import classes from './Gallery.module.css';
import { GalleryImage } from './GalleryImage';

export const Gallery = ({ images }) => {
	return (
		<>
			<div className={classes.root}>
				{images.map((image, index) => (
					<GalleryImage image={image} key={index} />
				))}
			</div>
		</>
	);
};
