import React, { useEffect, useState } from 'react';

import Button from '../../../UI/button/Button';
import ImgSmoothLoad from './../../../UI/ImgSmoothLoad/ImgSmoothLoad';
import img from '../../../../assets/img/home/forest.webp';
import st from './welcome.module.css';

const Welcome = (props) => {
	const [visitedBefore] = useState(window.localStorage.getItem('visited'));

	useEffect(() => {
		window.localStorage.setItem('visited', '1');
	}, [visitedBefore]);

	return (
		<div className={st.welcome} {...props}>
			<div className={st.main}>
				{visitedBefore && (
					<>
						<p className={st.devText}>purpleblack.dev</p>{' '}
						<p className={st.welcomeLowerText}>Frontend Developer</p>
					</>
				)}
				<h2 className={st.bigText}>
					{visitedBefore ? 'Welcome back!' : 'purpleblack.dev'}
				</h2>
				<Button route='/contact' className={st.button} variant='glow'>
					Get in touch
				</Button>
			</div>
			<div className={`${st.programmer} ${st.overlay}`} />
			<ImgSmoothLoad
				className={st.programmer}
				src={img}
				alt='Karol mysteriously half faded overlayed by mountain hill with trees'
			/>
		</div>
	);
};

export default Welcome;
