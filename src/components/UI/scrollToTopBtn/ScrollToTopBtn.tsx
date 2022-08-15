import React, { useEffect, useState } from 'react';

import classes from './ScrollToTopBtn.module.css';

import { RiRocketFill } from 'react-icons/ri';
import { Button } from '../button/Button';

export const ScrollToTopBtn = () => {
	const [isVisible, setIsVisible] = useState(false);

	const buttonClickHandler = () => {
		window.scroll({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0 && !isVisible) {
				setIsVisible(true);
			} else if (window.scrollY === 0) {
				setIsVisible(false);
			}
		});
	}, [isVisible]);

	return (
		<>
			<Button
				purpose='button'
				onClick={buttonClickHandler}
				className={`${classes.button} ${isVisible ? '' : classes.hidden}`}
			>
				<RiRocketFill />
			</Button>
		</>
	);
};
