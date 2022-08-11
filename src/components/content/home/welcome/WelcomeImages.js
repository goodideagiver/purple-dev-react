import ImgSmoothLoad from '../../../UI/ImgSmoothLoad/ImgSmoothLoad';
import classes from './WelcomeImages.module.css';

import politeEmailBuilder from '../../../../assets/img/welcome/builder.webp';
import fetcher from '../../../../assets/img/welcome/fetcher.webp';
import fetcher2 from '../../../../assets/img/welcome/fetcher2.webp';
import adotPl from '../../../../assets/img/welcome/adotpl.webp';
import adotPl2 from '../../../../assets/img/welcome/adotpl2.webp';
import fakeinsta from '../../../../assets/img/welcome/fakeinsta.webp';
import todo from '../../../../assets/img/welcome/todo.webp';
import roadmapper1 from '../../../../assets/img/welcome/roadmapper1.png';
import roadmapper2 from '../../../../assets/img/welcome/roadmapper2.png';
import roadmapper3 from '../../../../assets/img/welcome/roadmapper3.png';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import trans from './PromoImageAnimation.module.css';
import { useWelcomeImages } from './useWelcomeImages';

const images = [
	adotPl2,
	roadmapper1,
	roadmapper2,
	roadmapper3,
	todo,
	politeEmailBuilder,
	fetcher,
	fetcher2,
	fakeinsta,
	adotPl,
];

export const WelcomeImages = () => {
	const { selectedImages, activeImageIndex, nextImageHandler, isInputBlocked } =
		useWelcomeImages(8000, 0, images, 2000);

	return (
		<div className={classes.imagesWrapper} aria-hidden='true'>
			<div
				data-disabled={isInputBlocked}
				onClick={nextImageHandler}
				className={`${classes.image} ${classes.clickableImage}`}
			>
				<TransitionGroup>
					<CSSTransition
						key={activeImageIndex}
						classNames={trans}
						timeout={2000}
					>
						<ImgSmoothLoad animate={false} src={selectedImages[0]} />
					</CSSTransition>
				</TransitionGroup>
			</div>
			<div className={classes.image}>
				<TransitionGroup>
					<CSSTransition
						key={activeImageIndex}
						classNames={trans}
						timeout={2000}
					>
						<ImgSmoothLoad animate={false} src={selectedImages[1]} />
					</CSSTransition>
				</TransitionGroup>
				<button
					disabled={isInputBlocked}
					onClick={nextImageHandler}
					className={classes.control}
				>
					Next
				</button>
			</div>
		</div>
	);
};