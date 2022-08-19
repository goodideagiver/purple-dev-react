import React from 'react';
import ImgSmoothLoad from '../../../UI/ImgSmoothLoad/ImgSmoothLoad';
import img from '/public/assets/img/home/forest.webp';
import st from './welcome.module.css';

export const ProgrammerBackground = () => {
	return (
		<div className={st.programmer} aria-hidden='true'>
			<div className={`${st.programmer} ${st.overlay}`} />
			<ImgSmoothLoad
				priority={true}
				className={st.image}
				src={img}
				alt=''
				aria-hidden='true'
			/>
		</div>
	);
};

export default ProgrammerBackground;
