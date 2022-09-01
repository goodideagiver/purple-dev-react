import { Button } from '../../../UI/button/Button';
import st from './PromoWelcome.module.css';

export const PromoWelcome = () => (
	<div className={st.promo}>
		<div className={st.upperText}>
			<h1 className={st.bigText}>
				Frontend <span className={st.devText}>developer</span>
			</h1>
			<p className={st.upperTextSub}>Hello World!</p>
		</div>
		<p className={st.info}>
			Welcome to my website, here you can learn some useful information about
			me.
		</p>
		<Button
			purpose='route'
			href='/contact'
			className={st.button}
			variant='glow'
		>
			Contact me
		</Button>
	</div>
);
