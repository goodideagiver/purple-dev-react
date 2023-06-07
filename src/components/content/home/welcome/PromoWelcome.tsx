import { Button } from '../../../UI/button/Button'
import st from './PromoWelcome.module.css'

export const PromoWelcome = () => (
  <div className={st.promo}>
    <div className={st.upperText}>
      <h2 className={st.bigText}>
        Frontend <span className={st.devText}>developer</span>
      </h2>
      <p className={st.upperTextSub}>Hello World!</p>
    </div>
    <p className={st.info}>
      Welcome to my world of front-end development, where creativity meets
      functionality to craft exceptional digital experiences.
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
)
