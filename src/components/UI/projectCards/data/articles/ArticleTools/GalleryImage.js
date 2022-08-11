import { Suspense, useState } from 'react';
import ImgSmoothLoad from '../../../../ImgSmoothLoad/ImgSmoothLoad';
import { ImageZoom } from './ImageZoom';

import classes from './GalleryImage.module.css';

export const GalleryImage = ({ image }) => {
	const [imageZoomVisible, setImageZoomVisible] = useState(false);

	return (
		<Suspense fallback={<p>Loading...</p>}>
			<button
				onClick={() => setImageZoomVisible(true)}
				className={classes.button}
			>
				<ImgSmoothLoad src={image.src} />
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
