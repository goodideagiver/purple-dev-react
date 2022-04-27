import img from '../../../../img/home/forest.png';

import React, { useEffect, useState } from 'react';
import Button from '../../../UI/button/Button';

import st from './welcome.module.css';

import { ActiveSectionContext } from '../../../../store/active-section';

const Welcome = (props) => {
	const [visitedBefore] = useState(window.localStorage.getItem('visited'));

	const { setVisibleSection } = ActiveSectionContext();

	useEffect(() => {
		window.localStorage.setItem('visited', '1');
	}, []);

	const getInTouchClickHandler = () => setVisibleSection('contact');

	return (
		<div className={st.welcome} {...props}>
			<div className={st.main}>
				{visitedBefore && <p className={st.devText}>purpleblack.dev</p>}
				<h2 className={st.bigText}>
					{visitedBefore ? 'Welcome back!' : 'purpleblack.dev'}
				</h2>
				<Button
					onClick={getInTouchClickHandler}
					className={st.button}
					variant='special'
				>
					Get in touch
				</Button>
			</div>
			<div className={`${st.programmer} ${st.overlay}`} />
			<img className={st.programmer} src={img} alt='bad programmer' />
		</div>
	);
};

export default Welcome;
