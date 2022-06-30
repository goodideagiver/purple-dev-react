import Button from '../../../UI/button/Button';
import st from './PromoWelcome.module.css';

export const PromoWelcome = () => (
	<div className={st.promo}>
		<h2 className={st.devText}>purpleblack.dev</h2>
		<p className={st.bigText}>Aspiring frontend developer</p>
		<p className={st.info}>
			This is my website, here you can learn some usefull information about me.
			I am always trying to learn new things and I am always trying to improve
			my skills.
		</p>
		<Button route='/about' className={st.button} variant='glow'>
			Contact me
		</Button>
	</div>
);
