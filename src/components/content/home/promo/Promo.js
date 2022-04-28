import React from 'react';

import st from './promo.module.css';

import cellData from './data';

const Promo = () => {
	return (
		<div className={st.root}>
			<ul className={st.list}>
				{cellData.map(({ name, desc, number }, id) => (
					<li key={name}>
						<p className={st.number}>{id + 1}</p>
						<div className={st.cell}>
							<h3>{name}</h3>
							<p className={st.desc}>{desc}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Promo;
