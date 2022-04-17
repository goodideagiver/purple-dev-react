import git from './technologies/github.png';
import react from './technologies/react.png';
import sass from './technologies/sass.png';
import parcel from './technologies/parcel.png';

import styles from './about.module.css';

import React from 'react';

const About = () => {
	return (
		<div>
			<header className={styles.header}>
				<img
					alt='furry'
					className={styles.picture}
					src='https://cdn.weasyl.com/~rowedahelicon/submissions/1864457/b444ac36096ebdfdf6a4eb7be914d686ee8e47ebac75d90438c8519e0450b196/rowedahelicon-pfp-for-awesomeguy117.png'
				/>
				<div>
					<h2>Karol</h2>
					<p>Frontend Developer</p>
				</div>
			</header>
			<main className={`${styles.grid}`}>
				<div className={styles.cell}>
					<h3>Known Technologies</h3>
					<div
						className={`${styles.technologies} ${styles.cardInnerPadding}`}
					>
						<img src={git} alt='GitHub' />
						<img src={react} alt='react' />
						<img src={sass} alt='sass' />
						<img src={parcel} alt='parcel' />
					</div>
				</div>
				<div className={styles.cell}>
					<h3>About me</h3>
					<p className={styles.cardInnerPadding}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Sit voluptatem vitae fuga nihil corrupti optio dolorem,
						amet temporibus est ad magnam aliquam quod illum fugit
						numquam et expedita animi impedit.
					</p>
				</div>
				<div className={styles.cell}>
					<h3>Skills</h3>
					<ul
						className={`${styles.skills} ${styles.cardInnerPadding}`}
					>
						<li>JavaScript</li>
						<li>CSS</li>
						<li>HTML</li>
						<li>Photoshop</li>
						<li>English</li>
						<li>Polish</li>
					</ul>
				</div>
			</main>
		</div>
	);
};

export default About;
