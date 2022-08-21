import { Button } from '../UI/button/Button';

export const Articles = ({ articles }) => {
	console.log(articles);

	return (
		<div>
			{articles?.length &&
				articles.map((article) => (
					<Button
						variant='special'
						key={article.attributes.slug}
						purpose='route'
						href={`/blog/post/${article.attributes.slug}`}
					>
						{article.attributes.title}
					</Button>
				))}
		</div>
	);
};
