import { ArticleTemplate } from './ArticleTools/ArticleTemplate/ArticleTemplate'

import foto1 from '/public/assets/img/articles/Bewebdev/1.png'
import foto2 from '/public/assets/img/articles/Bewebdev/2.png'
import foto3 from '/public/assets/img/articles/Bewebdev/3.png'

const images = [
  {
    src: foto1,
    alt: `The best way to learn web development
Carefully selected, verified, up to date`,
  },
  {
    src: foto2,
    alt: 'We record code reviews',
  },
  {
    src: foto3,
    alt: 'Find what you need to learn',
  },
]

const technologies = [
  'React',
  'TypeScript',
  'Playwright',
  'SASS',
  'Astro',
  'GitHub Actions',
]

const WhatDidILearn = () => (
  <>
    <h4>Working in a team</h4>
    <p>
      During my involvement in the bewebdev.tech project, I gained valuable
      experience working collaboratively in a team setting. We followed a
      structured workflow using pull requests and issues, ensuring that each
      contribution was thoroughly reviewed by both myself and other
      contributors. This process allowed for constructive feedback and
      improvements to be incorporated into the project.
    </p>
    <p>
      Being part of the review process for pull requests made by others enabled
      me to develop a critical eye and provided an opportunity to offer valuable
      insights and suggestions. It fostered a culture of collaboration and
      continuous improvement within our team.
    </p>
    <h4>Handling user feedback</h4>
    <p>
      I learned the importance of considering user feedback when developing the
      project. By actively listening to the needs and suggestions of our users,
      we were able to iterate and enhance the platform, making it more
      user-friendly and effective in meeting their requirements.
    </p>
    <p>
      Working in such a dynamic and collaborative environment taught me the
      significance of effective communication, teamwork, and adaptability. These
      skills have not only contributed to the success of the bewebdev.tech
      project but have also prepared me to excel in future team-oriented
      endeavors.
    </p>
    <h4>Testing and GitHub actions</h4>
    <p>
      I integrated E2E tests and unit tests into GitHub Actions, automating the
      testing process for every pull request. This streamlined the development
      workflow, allowing for quicker identification of any regressions or issues
      introduced by code changes. By ensuring that tests ran automatically, we
      maintained a high standard of code quality and minimized the risk of bugs
      reaching production.
    </p>
    <p>
      {` By automating the testing process, we could validate the platform's
      performance and functionality consistently. It saved us valuable time and
      allowed us to focus on other aspects of development, knowing that our code
      was thoroughly tested.`}
    </p>
  </>
)

export const Bewebdevtech = () => (
  <ArticleTemplate
    images={images}
    demoLink='https://bewebdev.tech/'
    repoLink='https://github.com/NowYouKnowProgramming/webdev-learning-materials'
    technologies={technologies}
    whatDidILearn={<WhatDidILearn />}
  />
)
