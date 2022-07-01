import ImgSmoothLoad from '../../../UI/ImgSmoothLoad/ImgSmoothLoad';
import classes from './WelcomeImages.module.css';

import politeEmailBuilder from '../../../../assets/img/welcome/builder.webp';
import fetcher from '../../../../assets/img/welcome/fetcher.webp';
import fetcher2 from '../../../../assets/img/welcome/fetcher2.webp';
import adotPl from '../../../../assets/img/welcome/adotpl.webp';
import adotPl2 from '../../../../assets/img/welcome/adotpl2.webp';
import fakeinsta from '../../../../assets/img/welcome/fakeinsta.webp';
import todo from '../../../../assets/img/welcome/todo.webp';

import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import trans from './PromoImageAnimation.module.css';

const images = [
	adotPl2,
	todo,
	politeEmailBuilder,
	fetcher,
	fetcher2,
	fakeinsta,
	adotPl,
];

export const WelcomeImages = () => {
	const [activeImageIndex, setActiveImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveImageIndex((activeImageIndex + 1) % images.length);
		}, 8000);

		return () => clearInterval(interval);
	}, [activeImageIndex]);

	return (
		<div className={classes.imagesWrapper} aria-hidden='true'>
			<div className={classes.image}>
				<TransitionGroup>
					<CSSTransition
						key={activeImageIndex}
						classNames={trans}
						timeout={2000}
					>
						<ImgSmoothLoad animate={false} src={images.at(activeImageIndex)} />
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
						<ImgSmoothLoad
							animate={false}
							src={images.at(activeImageIndex - 1)}
						/>
					</CSSTransition>
				</TransitionGroup>
			</div>
		</div>
	);
};
