import { createPortal } from 'react-dom';
import ImgSmoothLoad from '../../../../ImgSmoothLoad/ImgSmoothLoad';

import classes from './ImageZoom.module.css';

const Backdrop = ({ onClick }) => {
	return <div onClick={onClick} className={classes.backdrop}></div>;
};

export const ImageZoom = ({ image, onClick }) => {
	return createPortal(
		<>
			<Backdrop onClick={onClick} />
			<div className={classes.imgContainer}>
				<ImgSmoothLoad src={image} />
			</div>
		</>,
		document.getElementById('overlay-root')
	);
};
