import Button from '../../../../../button/Button';
import { Gallery } from '../Gallery';
import { ArticleSection } from './ArticleSection';
import { ArticleTechnologies } from './ArticleTechnologies';

import { motion } from 'framer-motion';

import classes from './ArticleTemplate.module.css';

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.2,
		},
	},
};

export const ArticleTemplate = ({
	technologies,
	features,
	whatDidILearn,
	repoLink,
	demoLink,
	images,
}) => {
	return (
		<motion.div
			variants={container}
			initial='hidden'
			animate='visible'
			className={classes.root}
		>
			{images && <Gallery images={images} />}
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
		</motion.div>
	);
};
