import { Article } from '../../../src/components/Articles/Article/Article';
import { fetchAPI } from '../../../src/lib/api';

type Props = {
	article: any;
	categories: any;
	hasError?: boolean;
};

const Post = ({ article, categories, hasError }: Props) => {
	if (hasError) {
		return <div>Something went wrong ...</div>;
	}

	if (!article || !categories) {
		return <div>Something went wrong ...</div>;
	}

	return <Article article={article} categories={categories} />;
};

export const getStaticPaths = async () => {
	const articlesRes = await fetchAPI('/articles', { fields: ['slug'] });

	return {
		paths: articlesRes.data.map((article: any) => ({
			params: {
				slug: article.attributes.slug,
			},
		})),
		fallback: false,
	};
};

export const getStaticProps = async ({ params }: { params: any }) => {
	try {
		const articlesRes = await fetchAPI('/articles', {
			filters: {
				slug: params.slug,
			},
			populate: ['image', 'category', 'author.picture'],
		});

		const categoriesRes = await fetchAPI('/categories');

		return {
			props: { article: articlesRes.data[0], categories: categoriesRes },
			revalidate: 1,
		};
	} catch (error) {
		return {
			props: { hasError: true },
		};
	}
};

export default Post;
