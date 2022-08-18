import { Gallery } from '../Gallery';
import { ArticleSection } from './ArticleSection';
import { ArticleTechnologies } from './ArticleTechnologies';

import classes from './ArticleTemplate.module.css';
import { Button } from '../../../../../button/Button';
import { Image } from '../GalleryImage.types';
import { ReactNode } from 'react';

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.35,
			staggerChildren: 0.2,
		},
	},
};

type ArticleTemplateProps = {
	technologies: string[];
	images: Image[];
	features: ReactNode;
	whatDidILearn: ReactNode;
	demoLink: string;
	repoLink: string;
};

export const ArticleTemplate = ({
	technologies,
	features,
	whatDidILearn,
	repoLink,
	demoLink,
	images,
}: ArticleTemplateProps) => {
	return (
		<div className={classes.root}>
			{images && <Gallery images={images} />}
			{whatDidILearn && (
				<ArticleSection sectionName='🧠 What did I learn'>
					{whatDidILearn}
				</ArticleSection>
			)}
			{features && (
				<ArticleSection sectionName='✨ Features'>{features}</ArticleSection>
			)}
			{technologies && <ArticleTechnologies technologiesArray={technologies} />}
			{(!!repoLink || !!demoLink) && (
				<section className={classes.links}>
					{repoLink && (
						<Button
							variant='callToAction'
							href={repoLink}
							purpose='externalLink'
						>
							{' '}
							📦 Repo
						</Button>
					)}{' '}
					{demoLink && (
						<Button variant='glow' purpose='externalLink' href={demoLink}>
							🎬 Demo
						</Button>
					)}
				</section>
			)}
		</div>
	);
};
