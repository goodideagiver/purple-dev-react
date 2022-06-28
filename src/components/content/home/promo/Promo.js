import React from 'react';

import st from './promo.module.css';
import classes from './wave.module.css';

import cellData from './data';

const Promo = () => {
	const listElements = cellData.map(({ name, desc, number }, id) => (
		<li key={name}>
			<p className={st.number}>{id + 1}</p>
			<div className={st.cell}>
				<h3>{name}</h3>
				<p className={st.desc}>{desc}</p>
			</div>
		</li>
	));

	return (
		<div className={`${st.root} ${classes.wave}`}>
			<ul className={st.list}>{listElements}</ul>
			<div className={classes.waveFirst}></div>
			<div className={classes.waveSecond}></div>
			<div className={classes.waveThird}></div>
		</div>
	);
};

export default Promo;
