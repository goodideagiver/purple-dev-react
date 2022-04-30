import git from '../../../assets/img/technologies/github.png';
import react from '../../../assets/img/technologies/react.png';
import sass from '../../../assets/img/technologies/sass.png';
import parcel from '../../../assets/img/technologies/parcel.png';
import profile from '../../../assets/img/about/proProgrammer.png'

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
					alt='Karol face portrait with cat in the bottom'
					className={styles.picture}
					src={profile}
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
				<EmploymentHistory className={` ${styles.cell}`} />
			</main>
		</div>
	);
};

export default About;
