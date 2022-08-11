import { Suspense } from 'react';
import ImgSmoothLoad from '../../../../ImgSmoothLoad/ImgSmoothLoad';

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
