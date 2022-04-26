import git from './technologies/github.png';
import react from './technologies/react.png';
import sass from './technologies/sass.png';
import parcel from './technologies/parcel.png';

import styles from './about.module.css';

import React from 'react';
import timeSince from '../../../helpers/timeSince';
import Roadmap from './roadmap/Roadmap';
import EmploymentHistory from './employmentHistory/EmploymentHistory';

const About = ({ className }) => {
	return (
		<div className={className}>
			<header className={styles.header}>
				<img
					alt='furry'
					className={styles.picture}
					src='https://cdn.weasyl.com/~rowedahelicon/submissions/1864457/b444ac36096ebdfdf6a4eb7be914d686ee8e47ebac75d90438c8519e0450b196/rowedahelicon-pfp-for-awesomeguy117.png'
				/>
				<div>
					<h2>Karol</h2>
					<p className={styles.developer}>Frontend Developer</p>
					<p className={styles.learning}>
						{timeSince(new Date(2021, 9, 10))} of learning frontend{' '}
					</p>
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
						Hello, my name is Karol.
					</p>
					<p className={styles.cardInnerPadding}>
						In the past I used to create 2D animation and design 2D
						graphics, the skills developped while doing that helped
						me a lot in learning web programming.
					</p>
					<p className={styles.cardInnerPadding}>
						I'm trying to commit daily to my{' '}
						{<a href='https://github.com/goodideagiver'>GitHub</a>}{' '}
						in order to recieve the best results.
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
						<li>RWD</li>
						<li>Photoshop</li>
						<li>English</li>
						<li>Photography</li>
					</ul>
				</div>
				<Roadmap className={styles.cell} />
				<EmploymentHistory className={`${styles.cardInnerPadding} ${styles.cell}`} />
			</main>
		</div>
	);
};

export default About;
