import { useEffect, useState } from 'react';

import ImgSmoothLoad from './../../../UI/ImgSmoothLoad/ImgSmoothLoad';
import img from '/public/assets/img/home/forest.webp';
import st from './welcome.module.css';
import { WelcomeImages } from './WelcomeImages';
import { PromoWelcome } from './PromoWelcome';

const Welcome = (props) => {
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
