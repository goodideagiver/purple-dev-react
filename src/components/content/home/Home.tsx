import st from './home.module.css';
import ProjectCards from '../../UI/projectCards/ProjectCards';
import Welcome from './welcome/Welcome';
import Promo from './promo/Promo';
import AboutMeCTA from '../../UI/aboutMeCTA/AboutMeCTA';
import FunnyQuote from './funnyQuote/FunnyQuote';

export const Home = () => {
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
				<div className={st.filler} />
				<AboutMeCTA />
			</section>
		</>
	);
};
