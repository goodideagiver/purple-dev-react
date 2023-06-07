import { ReactNode } from 'react'
import { HowToAskGoodQuestions } from './articles/HowToAskGoodQuestions'
import { Roadmapper } from './articles/Roadmapper'
import { Bewebdevtech } from './articles/Bewebdevtech'

type ProjectCardData = {
  title: string
  shortDesc: string
  desc: string[]
  link: string
  tooltip?: string
  color: string
  article?: ReactNode
}

const cardData: ProjectCardData[] = [
  {
    title: 'Roadmapper.ts',
    shortDesc: 'Build a roadmap for your learning journey',
    desc: ['React', 'TypeScript', 'React Transition Group', 'Redux'],
    link: 'https://goodideagiver.github.io/roadmapper-ts/',
    color: '#4e6be130',
    tooltip: 'Visit website',
    article: <Roadmapper />,
  },
  {
    title: 'How to ask good questions?',
    shortDesc: 'Generate accurate questions that are easier to answer.',
    desc: ['React', 'TypeScript', 'react-testing-library', 'i18next'],
    tooltip: 'Learn more',
    link: 'https://goodideagiver.github.io/how-to-ask-good-questions/',
    color: '#a66fff30',
    article: <HowToAskGoodQuestions />,
  },
  {
    title: 'Bewebdev.tech',
    shortDesc: 'Your ultimate destination for learning web development.',
    desc: ['Astro', 'Playwright', 'TypeScript', 'SCSS', 'React'],
    link: 'https://bewebdev.tech/',
    color: '#305ae41f',
    tooltip: 'Learn more',
    article: <Bewebdevtech />,
  },
]

export default cardData
