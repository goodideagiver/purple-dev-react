import { Button } from '../UI/button/Button';

type Props = {
	articles: any;
};

export const Articles = ({ articles }: Props) => {
	console.log(articles);

	return (
		<div>
			{articles?.length &&
				articles.map((article: any) => (
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
