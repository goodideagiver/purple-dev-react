import Button from '../../../UI/button/Button';
import st from './PromoWelcome.module.css';

export const PromoWelcome = () => (
	<div className={st.promo}>
		<p className={st.bigText}>
			Aspiring frontend <span className={st.devText}>developer</span>
		</p>
		<p className={st.info}>
			This is my website, here you can learn some useful information about me.
			I am always trying to learn new things and I am always trying to improve
			my skills.
		</p>
		<Button route='/contact' className={st.button} variant='glow'>
			Contact me
		</Button>
	</div>
);
