import React from 'react';

import st from './promo.module.css';

const Promo = () => {
	const cellData = [
		{
			name: 'Interfaces',
			desc: 'As user friendly as possible',
		},
		{
			name: 'Websites',
			desc: 'Easy to use and easy to look at',
		},
		{
			name: 'Visuals',
			desc: 'Clarity and transparency',
		},
	];

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
