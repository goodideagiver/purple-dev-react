import roadmapper1 from '../../../../../assets/img/welcome/roadmapper1.webp';
import roadmapper2 from '../../../../../assets/img/welcome/roadmapper2.webp';
import roadmapper3 from '../../../../../assets/img/welcome/roadmapper3.webp';
import { ArticleTemplate } from './ArticleTools/ArticleTemplate/ArticleTemplate';

import { Gallery } from './ArticleTools/Gallery';

import classes from './ArticleTools/ArticleTemplate/ArticleTemplate.module.css';

const images = [
	{ src: roadmapper1 },
	{ src: roadmapper2 },
	{ src: roadmapper3 },
];

const WhatDidILearn = () => (
	<>
		<p>
			This was my first app that was created using mobile first UI approach. I
			tried my best to fit as many elements on iphone 5 screen and I think I
			achieved very clean UI look that is still easy to use despite the amount
			of the elements visible at once.
		</p>
		<p>
			Since this app is very interactive I researched the best way to design
			button sizes and I was highly inspired by{' '}
			<a
				className={classes.externalLink}
				target='_blank'
				rel='noopener noreferrer'
				href='https://uxmovement.com/mobile/optimal-size-and-spacing-for-mobile-buttons/'
			>
				this
			</a>{' '}
			article.{' '}
		</p>
		<p>
			This was my first project written in TypeScript. At the beginning I
			despised using TypeScript, I was thinking it only clutters the code and
			introduces more noise than pros. I was wrong. I learned that TypeScript is
			a great tool to use and I am very happy with the result. Developing this
			app was becoming easier and easier as I learned more about TypeScript and
			its features. Refactoring and reusing existing code was easier the more
			code I wrote.
		</p>
		<p>
			The thing I'm most proud of is{' '}
			<a
				className={classes.externalLink}
				href='https://github.com/goodideagiver/roadmapper-ts/blob/master/src/components/AddPointModal/AddPointModal.tsx'
				target='_blank'
				rel='noopener noreferrer'
			>
				AddPointModal
			</a>{' '}
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
			It was a great experience when I was trying to write this component in the
			most abstract way in order for it to work with multiple uses. And
			TypeScript was a great help.
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
			<Gallery images={images} />
			<ArticleTemplate
				technologies={[
					'React',
					'TypeScript',
					'React Transition Group',
					'Redux + toolkit',
					'Jest',
					'Parcel',
				]}
				features={<Features />}
				whatDidILearn={<WhatDidILearn />}
				demoLink='https://goodideagiver.github.io/roadmapper-ts/'
				repoLink='https://github.com/goodideagiver/roadmapper-ts'
			/>
		</>
	);
};
