import ImgSmoothLoad from '../../../UI/ImgSmoothLoad/ImgSmoothLoad';
import img from '/public/assets/img/home/forest.webp';
import { ScrollParallax } from 'react-just-parallax';

import classes from './ProgrammerBackground.module.css';

export const ProgrammerBackground = () => {
	return (
		<div className={classes.programmer} aria-hidden='true'>
			<ScrollParallax>
				<div className={`${classes.programmer} ${classes.overlay}`} />
				<ImgSmoothLoad
					priority={true}
					className={classes.image}
					src={img}
					alt=''
					aria-hidden='true'
				/>
			</ScrollParallax>
		</div>
	);
};

export default ProgrammerBackground;
