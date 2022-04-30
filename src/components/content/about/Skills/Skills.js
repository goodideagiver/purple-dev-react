import skillList from './data';

const Skills = ({ styles }) => {
	return (
		<div className={styles.cell}>
			<h3>Skills</h3>
			<ul className={`${styles.skills} ${styles.cardInnerPadding}`}>
				{skillList.map((skill) => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
		</div>
	);
};

export default Skills;
