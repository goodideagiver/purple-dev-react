import Button from '../../../UI/button/Button';

import React from 'react';

import styles from './myGoals.module.css';
import { ActiveSectionContext } from '../../../../store/active-section';

const MyGoals = props => {
	const { setVisibleSection } = ActiveSectionContext();
	const showContactHandler = () => setVisibleSection('contact');

	return (
		<div className={styles.goals}>
			<h2>Why choose me?</h2>
			<ul className={styles.list}>
				<li>
					<span className='material-icons'>brush</span>
					<p>
						My focus is to make projects as user friendly as
						possible
					</p>
				</li>
				<li>
					<span className='material-icons'>psychology</span>
					<p>Problem solving is my passion</p>
				</li>
				<li>
					<span className='material-icons'>visibility</span>
					<p>Visual clarity and transparency is my main goal</p>
				</li>
			</ul>
			<Button
				className={styles.button}
				onClick={showContactHandler}
				variant='special'
			>
				Contact me
			</Button>
		</div>
	);
};

export default MyGoals;
