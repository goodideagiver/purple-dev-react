import { ArticleTemplate } from './ArticleTools/ArticleTemplate/ArticleTemplate';
import { SimpleList } from './ArticleTools/SimpleList/SimpleList';

import filledApp from '/public/assets/img/articles/HowToAskGoodQuestions/filledApp.png';
import emptyApp from '/public/assets/img/articles/HowToAskGoodQuestions/emptyApp.png';
import { ExternalLink } from '../../../ExternalLink/ExternalLink';

const Features = () => (
	<SimpleList>
		<li>Language switcher: [PLEN]</li>{' '}
		<li>
			Copy generated question to clipboard (formatted for markdown or discord)
		</li>{' '}
		<li>Step by step question generation</li>{' '}
		<li>
			Subtle eye candy progress bar to keep you motivated when filling the
			fields
		</li>
	</SimpleList>
);

const images = [
	{
		src: filledApp,
		alt: 'Screenshot of the app with filled fields',
	},
	{
		src: emptyApp,
		alt: 'Screenshot of the app with empty fields',
	},
];

const technologies = [
	'React',
	'TypeScript',
	'react-testing-library',
	'i18next',
];

const WhatDidILearn = () => (
	<>
		<p>
			This app was created in order to help people on a discord server to ask
			better questions.
		</p>
		<p>
			When creating new projects I always select new technologies that I don
			{`'`}t know yet to learn them in practice. This time I wanted to check out
			Vite and testing library for React. I also wanted to try out i18next for
			translations, because this app was supposed to be available for people
			that speak different languages.
		</p>
		<p>
			During its development I watched a tutorial{' '}
			<ExternalLink href='https://www.youtube.com/watch?v=l9qr3EuLE_8&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&index=8'>
				React Testing Library Tutorial by The Net Ninja
			</ExternalLink>{' '}
			and implemented tests for the app. I am thankful that vitest supports jest
			and chai assertions out of the box and I could watch the tutorial for Jest
			and just adjust minor things to make it compatibile with vitest.
		</p>
	</>
);

export const HowToAskGoodQuestions = () => (
	<ArticleTemplate
		demoLink='https://goodideagiver.github.io/how-to-ask-good-questions/'
		features={<Features />}
		images={images}
		repoLink='https://github.com/goodideagiver/how-to-ask-good-questions'
		technologies={technologies}
		whatDidILearn={<WhatDidILearn />}
	/>
);
