// import Button from '../../UI/button/Button';

import Slider from '../../UI/slider/Slider';
import styles from './home.module.css';
import ProjectCards from '../../UI/projectCards/ProjectCards';
import Welcome from './welcome/Welcome';

const Home = props => {
	return (
		<>
			<section>
				<Welcome />
			</section>
			<section className={styles.nextTo}>
				<div>PLACEHOLDER</div>
				<Slider />
			</section>
			<section className={styles.nextTo}>
				<ProjectCards />
			</section>
		</>
	);
};

export default Home;
