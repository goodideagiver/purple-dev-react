import st from './home.module.css';
import ProjectCards from '../../UI/projectCards/ProjectCards';
import Welcome from './welcome/Welcome';
import Promo from './promo/Promo';
import AboutMeCTA from '../../UI/aboutMeCTA/AboutMeCTA';
import FunnyQuote from './funnyQuote/FunnyQuote';

const Home = (props) => {
	return (
		<>
			<section className={`${st.sectionWidth} ${st.homeAnim}`}>
				<Welcome />
			</section>
			<Promo />
			<section className={`${st.nextTo} ${st.sectionWidth}`}>
				<ProjectCards />
			</section>
			<section className={`${st.nextTo} ${st.sectionWidth}`}>
				<FunnyQuote />
				<AboutMeCTA />
			</section>
		</>
	);
};

export default Home;
