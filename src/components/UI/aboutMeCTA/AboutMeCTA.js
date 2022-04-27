import { useContext } from 'react';

import programmer from '../../../img/programmer/proProgrammer.png';
import { ActiveSectionContext } from '../../../store/active-section';
import Button from '../button/Button';

import classes from './AboutMeCTA.module.css';

const AboutMeCTA = (props) => {
	const { setVisibleSection } = ActiveSectionContext();

	const buttonClickHandler = () => setVisibleSection('about');

	return (
		<div className={classes['about-me']}>
			<div className={classes.image}>
				<img src={programmer} alt="Karol's face from shoulders up" />
			</div>
			<div className={classes.text}>
				<h2 className={classes.title}>More about me</h2>
				<p>Click the button below to read more.</p>
				<Button
					className={classes.button}
					variant='callToAction'
					onClick={buttonClickHandler}
				>
					About me
				</Button>
			</div>
		</div>
	);
};

export default AboutMeCTA;
