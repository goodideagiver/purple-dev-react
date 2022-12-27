import styles from './about.module.css'

import { MainPageContainer } from '../../UI/MainPageContainer/MainPageContainer'
import AboutMe from './AboutMe/AboutMe'
import EmploymentHistory from './employmentHistory/EmploymentHistory'
import Header from './Header/Header'
import Roadmap from './roadmap/Roadmap'
import Skills from './Skills/Skills'

const About = () => {
  return (
    <MainPageContainer>
      <Header styles={styles} />
      <main className={`${styles.grid}`}>
        <Skills styles={styles} />
        <AboutMe styles={styles} />
        {/* <KnownTechnologies styles={styles} /> */}
        <Roadmap className={styles.cell} />
        <EmploymentHistory className={styles.cell} />
      </main>
    </MainPageContainer>
  )
}

export default About
