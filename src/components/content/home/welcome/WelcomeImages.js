import ImgSmoothLoad from '../../../UI/ImgSmoothLoad/ImgSmoothLoad';
import classes from './WelcomeImages.module.css';
import code2 from '../../../../assets/img/contact/code.webp';
import programmer from '../../../../assets/img/programmer/proProgrammer.webp';

export const WelcomeImages = () => (
	<div className={classes.imagesWrapper}>
		<div className={classes.image}>
			<ImgSmoothLoad src={code2} />
		</div>
		<div className={classes.image}>
			<ImgSmoothLoad src={programmer} />
		</div>
	</div>
);
