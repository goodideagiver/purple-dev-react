import Button from '../../../../../button/Button';
import { ArticleSection } from './ArticleSection';
import { ArticleTechnologies } from './ArticleTechnologies';

import classes from './ArticleTemplate.module.css';

export const ArticleTemplate = ({
	technologies,
	features,
	whatDidILearn,
	repoLink,
	demoLink,
}) => {
	return (
		<div className={classes.root}>
			{whatDidILearn && (
				<ArticleSection
					sectionName='🧠 What did I learn'
					children={whatDidILearn}
				/>
			)}
			{features && (
				<ArticleSection sectionName='✨ Features' children={features} />
			)}
			{technologies && <ArticleTechnologies technologiesArray={technologies} />}
			{(!!repoLink || !!demoLink) && (
				<section className={classes.links}>
					{repoLink && (
						<Button
							variant='callToAction'
							link={repoLink}
							target='_blank'
							rel='noopener noreferrer'
						>
							{' '}
							📦 Repo
						</Button>
					)}{' '}
					{demoLink && (
						<Button
							variant='glow'
							target='_blank'
							rel='noopener noreferrer'
							link={demoLink}
						>
							🎬 Demo
						</Button>
					)}
				</section>
			)}
		</div>
	);
};
