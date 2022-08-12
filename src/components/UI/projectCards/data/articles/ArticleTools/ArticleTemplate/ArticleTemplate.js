import { ArticleSection } from './ArticleSection';
import { ArticleTechnologies } from './ArticleTechnologies';

import classes from './ArticleTemplate.module.css';

export const ArticleTemplate = ({ technologies, features, whatDidILearn }) => {
	return (
		<div className={classes.root}>
			{whatDidILearn && (
				<ArticleSection
					sectionName='What did I learn'
					children={whatDidILearn}
				/>
			)}
			{features && (
				<ArticleSection sectionName='Features' children={features} />
			)}
			{technologies && <ArticleTechnologies technologiesArray={technologies} />}
		</div>
	);
};
