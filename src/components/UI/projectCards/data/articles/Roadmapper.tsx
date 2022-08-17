import roadmapper1 from '/public/assets/img/welcome/roadmapper1.webp';
import roadmapper2 from '/public/assets/img/welcome/roadmapper2.webp';
import roadmapper3 from '/public/assets/img/welcome/roadmapper3.webp';
import { ArticleTemplate } from './ArticleTools/ArticleTemplate/ArticleTemplate';

import { Gallery } from './ArticleTools/Gallery';

import classes from './ArticleTools/ArticleTemplate/ArticleTemplate.module.css';
import { ExternalLink } from '../../../ExternalLink/ExternalLink';

const images = [
	{
		src: roadmapper1,
		alt: 'Screenshot of the roadmapper app - main view with 3 blocks in the middle',
	},
	{
		src: roadmapper2,
		alt: 'Screenshot of the roadmapper app - suggestion explain modal',
	},
	{
		src: roadmapper3,
		alt: 'Screenshot of the roadmapper app - edit roadmap point modal',
	},
];

const WhatDidILearn = () => (
	<>
		<p>
			This was my first app that was created using mobile first approach. I
			tried my best to fit as many elements on iphone 5 screen and I think I
			achieved very clean UI look that is still easy to use despite the amount
			of the elements visible at once.
		</p>
		<p>
			Since this app is very interactive I researched the best way to design
			button sizes and I was highly inspired by{' '}
			<ExternalLink href='https://uxmovement.com/mobile/optimal-size-and-spacing-for-mobile-buttons/'>
				this article
			</ExternalLink>{' '}
			.{' '}
		</p>
		<p>
			This was my first project written in TypeScript. At the beginning I
			despised using TypeScript, I was thinking it only clutters the code and
			introduces more noise than pros. I was wrong. I learned that TypeScript is
			a great tool to use and I am very happy with the result. Developing this
			app was becoming easier and easier as I learned more about TypeScript and
			its features. Refactoring and reusing existing code was easier the more
			code and type definitions I wrote.
		</p>
		<p>
			The thing I&aposm most proud of is{' '}
			<ExternalLink href='https://github.com/goodideagiver/roadmapper-ts/blob/master/src/components/AddPointModal/AddPointModal.tsx'>
				AddPointModal
			</ExternalLink>{' '}
			component. It is a modal that is used to add new points to the roadmap. At
			least it was planned to use for it. Hovewer I realized at some point durng
			development that this component could be used for other purposes as well.
		</p>
		<p>This component was also reused for these features:</p>
		<ul className={classes.list}>
			<li>Add roadmap midpoint</li>
			<li>Edit roadmap point</li>
		</ul>
		<p>
			Trying to write this component in the most abstract way in order for it to
			work with multiple use cases was a great experience. And TypeScript was a
			great help in that process.
		</p>
	</>
);

const Features = () => (
	<>
		<p>
			This project was created in order to help people design their own roadmaps
			to plan their learning process more thoroughly.
		</p>
		<p>
			Other use case is for people that want to help others choosing what to
			learn since there is a feature for roadmap sharing in the app.
		</p>
	</>
);

export const Roadmapper = () => {
	return (
		<>
			<ArticleTemplate
				images={images}
				technologies={[
					'React',
					'TypeScript',
					'React Transition Group',
					'Redux + toolkit',
					'Jest',
				]}
				features={<Features />}
				whatDidILearn={<WhatDidILearn />}
				demoLink='https://goodideagiver.github.io/roadmapper-ts/'
				repoLink='https://github.com/goodideagiver/roadmapper-ts'
			/>
		</>
	);
};
