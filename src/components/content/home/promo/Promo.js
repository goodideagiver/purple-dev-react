import React from 'react';

import st from './promo.module.css';

const Promo = () => {
	return (
		<div className={st.root}>
			<ul className={st.list}>
				<li>
					<p className={st.number}>1</p>
					<div className={st.cell}>
						<h3>Interfaces</h3>
						<p>As user friendly as possible</p>
					</div>
				</li>
				<li>
					<p className={st.number}>2</p>
					<div className={st.cell}>
						<h3>Websites</h3>
						<p>Easy to use and easy to look at</p>
					</div>
				</li>
				<li>
					<p className={st.number}>3</p>
					<div className={st.cell}>
						<h3>Visuals</h3>
						<p>Clarity and transparency</p>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Promo;
