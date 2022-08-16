import { StaticImageData } from 'next/image';
import Portal from '../../../../../../../HOC/Portal';
import ImgSmoothLoad from '../../../../ImgSmoothLoad/ImgSmoothLoad';

import classes from './ImageZoom.module.css';

type BackdropProps = {
	onClick: () => void;
};

const Backdrop = ({ onClick }: BackdropProps) => {
	return <div onClick={onClick} className={classes.backdrop}></div>;
};

type ImageZoomProps = {
	image: string | StaticImageData;
	onClick: () => void;
};

export const ImageZoom = ({ image, onClick }: ImageZoomProps) => {
	return (
		<Portal>
			<Backdrop onClick={onClick} />
			<div className={classes.imgContainer}>
				<ImgSmoothLoad src={image} alt='' />
			</div>
		</Portal>
	);
};
