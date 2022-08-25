import classes from './Articles.module.css';
import { ArticlePrev } from './ArticlePrev/ArticlePrev';

type Props = {
	articles: any;
};

export const Articles = ({ articles }: Props) => {
	console.log(articles);
	return (
		<div className={classes.root}>
			<h1 className={classes.title}>
				<span>My</span> blog
			</h1>
			<div className={classes.articlesGrid}>
				{articles?.length &&
					articles.map((article: any) => (
						<ArticlePrev
							publishedAt={article.published_at}
							category={article.attributes.category.data.attributes.name}
							href={`/blog/post/${article.attributes.slug}`}
							title={article.attributes.title}
							key={article.attributes.id}
							description={article.attributes.description}
						/>
					))}
			</div>
		</div>
	);
};
