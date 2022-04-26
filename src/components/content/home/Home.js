import st from './home.module.css';
import ProjectCards from '../../UI/projectCards/ProjectCards';
import Welcome from './welcome/Welcome';
import Promo from './promo/Promo';
import AboutMeCTA from '../../UI/aboutMeCTA/AboutMeCTA';

const Home = (props) => {
	return (
		<>
			<section className={`${st.sectionWidth} ${st.homeAnim}`}>
				<Welcome />
			</section>
			<Promo />
			<section className={`${st.nextTo} ${st.sectionWidth}`}>
				<ProjectCards />
				<AboutMeCTA />
			</section>
		</>
	);
};

export default Home;
