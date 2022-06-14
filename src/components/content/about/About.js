import styles from './about.module.css';

import Roadmap from './roadmap/Roadmap';
import EmploymentHistory from './employmentHistory/EmploymentHistory';
import Header from './Header/Header';
import KnownTechnologies from './KnownTechnologies/KnownTechnologies';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import { MainPageContainer } from '../../UI/MainPageContainer/MainPageContainer';

const About = () => {
	return (
		<MainPageContainer>
			<Header styles={styles} />
			<main className={`${styles.grid}`}>
				<KnownTechnologies styles={styles} />
				<AboutMe styles={styles} />
				<Skills styles={styles} />
				<Roadmap className={styles.cell} />
				<EmploymentHistory className={styles.cell} />
			</main>
		</MainPageContainer>
	);
};

export default About;
