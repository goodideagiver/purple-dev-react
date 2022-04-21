import React from 'react';

import timeSince from '../../../../helpers/timeSince';

import styles from './roadmap.module.css';

const Roadmap = ({ className }) => {
	const goals = [
		{ name: 'HTML + CSS', date: new Date(2021, 9, 10) },
		{ name: 'JavaScript', date: new Date(2022, 0, 7) },
		{ name: 'React', date: new Date(2022, 3, 6) },
		{ name: 'TypeScript', date: 'TBD' },
		{ name: 'Next.js', date: 'TBD' },
	];

	return (
		<div className={`${className} ${styles.root}`}>
			<h3>Writing bad code since:</h3>
			<ul>
				{goals.map(goal => (
					<li className={styles.item} key={goal.name}>
						<p className={styles.name}>{goal.name}</p>
						<p className={styles.date}>
							{goal.date !== 'TBD' ? timeSince(goal.date) : 'TBD'}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Roadmap;
