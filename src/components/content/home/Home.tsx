import st from './home.module.css';
import ProjectCards from '../../UI/projectCards/ProjectCards';
import Welcome from './welcome/Welcome';
import Promo from './promo/Promo';
import AboutMeCTA from '../../UI/aboutMeCTA/AboutMeCTA';
import FunnyQuote from './funnyQuote/FunnyQuote';
import { ReactNode } from 'react';

const ContactCTASection = () => (
	<>
		<FunnyQuote />
		<div className={st.filler} />
		<AboutMeCTA />
	</>
);

type HomeComponent = {
	component: ReactNode | JSX.Element;
	css?: string;
	sectionWidth?: boolean;
};

const HomeComponents: HomeComponent[] = [
	{ component: <Welcome />, css: st.homeAnim },
	{ component: <Promo />, sectionWidth: false },
	{ component: <ProjectCards />, css: st.nextTo },
	{ component: <ContactCTASection />, css: st.nextTo + ' ' + st.contactCTA },
];

export const Home = () => {
	const HomeComponentsWithSection = HomeComponents.map((component, index) => {
		return (
			<section
				key={index}
				className={`${
					component.sectionWidth === false ? '' : st.sectionWidth
				} ${component.css ? component.css : ''}`}
			>
				{component.component}
			</section>
		);
	});

	return <>{HomeComponentsWithSection}</>;
};
