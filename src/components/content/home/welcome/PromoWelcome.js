import Button from '../../../UI/button/Button';
import st from './PromoWelcome.module.css';

export const PromoWelcome = () => (
	<div className={st.promo}>
		<h2 className={st.devText}>purpleblack.dev</h2>
		<p className={st.bigText}>Frontend developer</p>
		<p className={st.info}>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
			laborum autem, necessitatibus obcaecati quam aspernatur assumenda fugit
		</p>
		<Button className={st.button} variant='glow'>
			Contact me
		</Button>
	</div>
);
