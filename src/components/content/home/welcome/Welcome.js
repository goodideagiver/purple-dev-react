import { useEffect, useState } from 'react';

import ImgSmoothLoad from './../../../UI/ImgSmoothLoad/ImgSmoothLoad';
import img from '../../../../assets/img/home/forest.webp';
import st from './welcome.module.css';
import { PromoWelcome } from './PromoWelcome';
import { WelcomeImages } from './WelcomeImages';

const Welcome = (props) => {
	const [visitedBefore] = useState(window.localStorage.getItem('visited'));

	useEffect(() => {
		window.localStorage.setItem('visited', '1');
	}, [visitedBefore]);

	return (
		<div className={st.welcome} {...props}>
			<div className={st.main}>
				<PromoWelcome />
				<WelcomeImages />
			</div>
			<div className={st.programmer}>
				<div className={`${st.programmer} ${st.overlay}`} />
				<ImgSmoothLoad
					className={st.image}
					src={img}
					alt=''
					aria-hidden='true'
				/>
			</div>
		</div>
	);
};

export default Welcome;
