import ImgSmoothLoad from '../../../UI/ImgSmoothLoad/ImgSmoothLoad';
import classes from './WelcomeImages.module.css';

export const WelcomeImages = () => (
	<div className={classes.imagesWrapper}>
		<div className={classes.image}>
			<ImgSmoothLoad
				src='https://loremflickr.com/640/360
'
			/>
		</div>
		<div className={classes.image}>
			<ImgSmoothLoad
				src='https://loremflickr.com/640/360
'
			/>
		</div>
	</div>
);
