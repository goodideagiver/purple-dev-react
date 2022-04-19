// import Button from '../../UI/button/Button';

import React from 'react';
import MyGoals from './myGoals/MyGoals';

import styles from './home.module.css';
import ProjectCards from '../../UI/projectCards/ProjectCards';

const Home = props => {
	return (
		<>
			<section className={styles.nextTo}>
				<div>PLACEHOLDER</div>
				<div>Slider</div>
			</section>
			<section className={styles.nextTo}>
				<ProjectCards />
			</section>
		</>
	);
};

export default Home;
