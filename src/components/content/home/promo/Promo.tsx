import st from './promo.module.css';
import classes from './wave.module.css';

import cellData from './data';

const Promo = () => {
	const listElements = cellData.map(({ name, desc }, id) => (
		<li key={name}>
			<p className={st.number}>{id + 1}</p>
			<div className={st.cell}>
				<h2>{name}</h2>
				<p className={st.desc}>{desc}</p>
			</div>
		</li>
	));

	return (
		<div className={`${st.root} ${classes.wave}`}>
			<ul className={st.list}>{listElements}</ul>
			<div className={`${classes.waveElement} ${classes.waveFirst}`}></div>
			<div className={`${classes.waveElement} ${classes.waveSecond}`}></div>
			<div className={`${classes.waveElement} ${classes.waveThird}`}></div>
		</div>
	);
};

export default Promo;
