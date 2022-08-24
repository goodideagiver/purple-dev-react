import classes from './Articles.module.css';

import { Button } from '../UI/button/Button';
import { ArticlePrev } from './ArticlePrev/ArticlePrev';

type Props = {
	articles: any;
};

export const Articles = ({ articles }: Props) => {
	console.log(articles);
	return (
		<div className={classes.root}>
			{articles?.length &&
				articles.map((article: any) => (
					<ArticlePrev
						category={article.attributes.category.data.attributes.name}
						href={`/blog/post/${article.attributes.slug}`}
						title={article.attributes.title}
						key={article.attributes.id}
						description={article.attributes.description}
					></ArticlePrev>
				))}
		</div>
	);
};
