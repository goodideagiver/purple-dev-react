import React from 'react';

import style from './slide.module.css';

const Slide = ({ img }) => {
	return (
		<div className={style.slide}>
			<img src={img} alt='slide' />
		</div>
	);
};

export default Slide;
