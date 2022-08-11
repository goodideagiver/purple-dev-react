import { Suspense } from 'react';
import ImgSmoothLoad from '../../../../ImgSmoothLoad/ImgSmoothLoad';

import classes from './Gallery.module.css';

export const Gallery = ({ images }) => {
	return (
		<div className={classes.root}>
			{images.map((image) => (
				<Suspense fallback={<p>Loading...</p>}>
					<button className={classes.button}>
						<ImgSmoothLoad src={image.src} />
					</button>
				</Suspense>
			))}
		</div>
	);
};
