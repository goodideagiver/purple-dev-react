import classes from './WelcomeImages.module.css';

import politeEmailBuilder from '../../../../../public/assets/img/welcome/builder.webp';
import fetcher from '../../../../../public/assets/img/welcome/builder.webp';
import fetcher2 from '../../../../../public/assets/img/welcome/builder.webp';
import adotPl from '../../../../../public/assets/img/welcome/builder.webp';
import adotPl2 from '../../../../../public/assets/img/welcome/builder.webp';
import fakeinsta from '../../../../../public/assets/img/welcome/builder.webp';
import todo from '../../../../../public/assets/img/welcome/builder.webp';
import roadmapper1 from '../../../../../public/assets/img/welcome/builder.webp';
import roadmapper2 from '../../../../../public/assets/img/welcome/builder.webp';
import roadmapper3 from '../../../../../public/assets/img/welcome/builder.webp';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import trans from './PromoImageAnimation.module.css';
import { useWelcomeImages } from './useWelcomeImages';
import ImgSmoothLoad from '../../../UI/ImgSmoothLoad/ImgSmoothLoad';

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
	const {
		selectedImages,
		activeImageIndex,
		nextImageHandler,
		isInputBlocked,
		setActiveImageIndex,
	} = useWelcomeImages(8000, 0, images, 2000);

	return (
		<div className={classes.imagesWrapper} aria-hidden='true'>
			<div className={classes.dotsWrapper}>
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
				<div className={classes.dots}>
					{images.map((el, index) => (
						<button
							key={index}
							data-active={index === activeImageIndex}
							onClick={() => setActiveImageIndex(index)}
							disabled={isInputBlocked}
							className={classes.control}
						></button>
					))}
				</div>
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
			</div>
		</div>
	);
};
