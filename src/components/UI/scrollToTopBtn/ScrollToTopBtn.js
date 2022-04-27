import React from 'react';
import Button from '../button/Button';

import classes from './ScrollToTopBtn.module.css';

import { RiRocketFill } from 'react-icons/ri';

const ScrollToTopBtn = () => {
	const buttonClickHandler = () => {
		window.scroll({ top: 0, behavior: 'smooth' });
	};

	return (
		<Button onClick={buttonClickHandler} className={classes.button}>
			<RiRocketFill />
		</Button>
	);
};

export default ScrollToTopBtn;
