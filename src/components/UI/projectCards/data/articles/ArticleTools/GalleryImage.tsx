import { Suspense, useState } from 'react';
import ImgSmoothLoad from '../../../../ImgSmoothLoad/ImgSmoothLoad';
import { ImageZoom } from './ImageZoom';

import classes from './GalleryImage.module.css';
import { GalleryImageProps } from './GalleryImage.types';

export const GalleryImage = ({ image }: GalleryImageProps) => {
	const [imageZoomVisible, setImageZoomVisible] = useState(false);

	return (
		<Suspense fallback={<p>Loading...</p>}>
			<button
				onClick={() => setImageZoomVisible(true)}
				className={classes.button}
			>
				<ImgSmoothLoad src={image.src} alt={image.alt || ''} />
			</button>
			{imageZoomVisible && (
				<ImageZoom
					onClick={() => setImageZoomVisible(false)}
					image={image.src}
				/>
			)}
		</Suspense>
	);
};
