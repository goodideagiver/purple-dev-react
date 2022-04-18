import Button from '../../../UI/button/Button';

import React from 'react';

import styles from './myGoals.module.css';

const MyGoals = props => {
	return (
		<div className={styles.goals}>
			<h2>Why choose me?</h2>
			<ul className={styles.list}>
				<li>
					<span class='material-icons'>brush</span>
					<p>
						My focus is to make projects as user friendly as
						possible
					</p>
				</li>
				<li>
					<span class='material-icons'>psychology</span>
					<p>Problem solving is my passion</p>
				</li>
				<li>
					<span class='material-icons'>visibility</span>
					<p>Visual clarity and transparency is my main goal</p>
				</li>
			</ul>
			<Button
				className={styles.button}
				onClick={props.showContactHandler}
				variant='special'
			>
				Contact me
			</Button>
		</div>
	);
};

export default MyGoals;
