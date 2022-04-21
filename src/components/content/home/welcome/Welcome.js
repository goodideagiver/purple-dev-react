import img from '../../../../img/home/forest.png';

import React, { useEffect, useState } from 'react';
import Button from '../../../UI/button/Button';

import st from './welcome.module.css';

const Welcome = props => {
	const [visitedBefore] = useState(window.localStorage.getItem('visited'));

	useEffect(() => {
		window.localStorage.setItem('visited', '1');
	}, []);

	return (
		<div className={st.welcome} {...props}>
			<div className={st.main}>
				{visitedBefore && <p className={st.devText}>purpleblack.dev</p>}
				<h2 className={st.bigText}>
					{visitedBefore ? 'Welcome back!' : 'purpleblack.dev'}
				</h2>
				<Button className={st.button} variant='special'>
					Get in touch
				</Button>
			</div>
			<div className={`${st.programmer} ${st.overlay}`} />
			<img className={st.programmer} src={img} alt='bad programmer' />
		</div>
	);
};

export default Welcome;
