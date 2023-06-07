import st from './welcome.module.css'

import { PromoWelcome } from './PromoWelcome'

import { WelcomeImages } from './WelcomeImages'
import ProgrammerBackground from './ProgrammerBackground'

const Welcome = () => {
  return (
    <section className={st.welcome}>
      <div className={st.main}>
        <PromoWelcome />
        <WelcomeImages />
      </div>
      <ProgrammerBackground />
    </section>
  )
}

export default Welcome
