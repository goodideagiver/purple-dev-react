// import Button from '../../UI/button/Button';

import React from 'react';
import MyGoals from './myGoals/MyGoals';

import styles from './home.module.css';



const Home = props => {
	return (
		<>
			<h1>purpleblack.dev</h1>
			<section className={styles.nextTo}>
				<MyGoals />
				<div>Slider</div>
			</section>
			<section className={styles.nextTo}>
				<header>
					<h2>Projects</h2>
					<p>Here you can find a list of my best projects</p>
				</header>
				<ul>
					<li>Website</li>
					<li>Website</li>
					<li>Website</li>
					<li>Website</li>
					<li>Website</li>
				</ul>
			</section>
		</>
	);
};

export default Home;
