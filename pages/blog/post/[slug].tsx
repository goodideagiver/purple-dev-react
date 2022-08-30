import Head from 'next/head';
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

	return (
		<>
			<Head>
				<title>{article.attributes.title}</title>
				<meta name='title' content={article.attributes.title} />
				<meta name='description' content={article.attributes.description} />
				<meta property='og:title' content={article.attributes.title} />
				<meta
					property='og:description'
					content={article.attributes.description}
				/>
				<meta property='og:type' content='article' />
			</Head>
			<Article article={article} categories={categories} />
		</>
	);
};

export const getStaticPaths = async () => {
	const articlesRes = await fetchAPI('/articles', { fields: ['slug'] });

	return {
		paths: articlesRes.data.map((article: any) => ({
			params: {
				slug: article.attributes.slug,
			},
		})),
		fallback: 'blocking',
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
			revalidate: 10,
		};
	}
};

export default Post;
