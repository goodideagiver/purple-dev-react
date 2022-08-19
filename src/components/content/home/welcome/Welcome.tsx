import st from './welcome.module.css';

import { PromoWelcome } from './PromoWelcome';

import { WelcomeImages } from './WelcomeImages';
import ProgrammerBackground from './ProgrammerBackground';

const Welcome = () => {
	return (
		<div className={st.welcome}>
			<div className={st.main}>
				<PromoWelcome />
				<WelcomeImages />
			</div>
			<ProgrammerBackground />
		</div>
	);
};

export default Welcome;
