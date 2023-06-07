import { ExternalLink } from '../../../UI/ExternalLink/ExternalLink'

type Props = {
  styles: { [key: string]: string }
}

const AboutMe = ({ styles }: Props) => {
  return (
    <div className={styles.cell}>
      <h3>About me</h3>
      <p className={styles.cardInnerPadding}>Hello, my name is Karol.</p>

      <p className={styles.cardInnerPadding}>
        I have dedicated countless hours to coding over the past several years,
        and{' '}
        <ExternalLink href='https://github.com/goodideagiver'>
          my GitHub profile
        </ExternalLink>{' '}
        stands as a testament to my commitment and progress. With consistent
        daily coding practice, I have continuously sharpened my skills and
        expanded my knowledge in various programming languages and frameworks.
      </p>
      <p className={styles.cardInnerPadding}>
        My previous experience in 2D animation, graphic design, and portrait
        photography has provided me with a unique set of skills that greatly
        accelerated my learning process in front-end development. The creative
        mindset and attention to detail required in these artistic disciplines
        seamlessly transferred into my coding journey.
      </p>
    </div>
  )
}

export default AboutMe
