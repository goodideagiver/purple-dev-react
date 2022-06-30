import Button from '../../../UI/button/Button';
import st from './PromoWelcome.module.css';

export const PromoWelcome = () => (
	<div className={st.promo}>
		<h2 className={st.devText}>purpleblack.dev</h2>
		<p className={st.bigText}>Frontend developer</p>
		<p className={st.info}>
			Welcome to my website, here you can learn some usefull information about
			me
		</p>
		<Button route='/about' className={st.button} variant='glow'>
			Contact me
		</Button>
	</div>
);
