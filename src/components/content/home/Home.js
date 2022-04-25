// import Button from '../../UI/button/Button';

import Slider from '../../UI/slider/Slider';
import st from './home.module.css';
import ProjectCards from '../../UI/projectCards/ProjectCards';
import Welcome from './welcome/Welcome';
import Promo from './promo/Promo';

const Home = props => {
	return (
		<>
			<section className={`${st.sectionWidth} ${st.homeAnim}`}>
				<Welcome />
			</section>
			<Promo />
			<section className={`${st.nextTo} ${st.sectionWidth}`}>
				<div>PLACEHOLDER</div>
				<Slider />
			</section>
			<section className={`${st.nextTo} ${st.sectionWidth}`}>
				<ProjectCards />
			</section>
		</>
	);
};

export default Home;
