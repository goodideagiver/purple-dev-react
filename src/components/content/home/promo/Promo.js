import React from 'react';

import st from './promo.module.css';

import cellData from './data';

const Promo = () => {


	return (
		<div className={st.root}>
			<ul className={st.list}>
				{cellData.map((data, id) => (
					<li key={data.name}>
						<p className={st.number}>{id + 1}</p>
						<div className={st.cell}>
							<h3>{data.name}</h3>
							<p className={st.desc}>{data.desc}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Promo;
