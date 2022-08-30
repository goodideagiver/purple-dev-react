import Head from 'next/head';
import { Articles } from '../../src/components/Articles/Articles';
import { fetchAPI } from '../../src/lib/api';

type Props = {
	articles: any;
	categories: any;
	homepage: any;
	hasError?: boolean;
};

const Posts = ({ articles, categories, homepage, hasError }: Props) => {
	if (hasError) {
		return <div>Something went wrong ...</div>;
	}

	return (
		<>
			<Head>
				<title>
					purpleblack.dev - Blog, articles about Frontend Development and news
				</title>
			</Head>
			<Articles articles={articles} />
		</>
	);
};

export default Posts;

export async function getStaticProps() {
	// Run API calls in parallel
	try {
		const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
			fetchAPI('/articles', { populate: ['image', 'category'] }),
			fetchAPI('/categories', { populate: '*' }),
			fetchAPI('/homepage', {
				populate: {
					hero: '*',
					seo: { populate: '*' },
				},
			}),
		]);
		return {
			props: {
				articles: articlesRes.data,
				categories: categoriesRes.data,
				homepage: homepageRes.data,
			},
			revalidate: 10,
		};
	} catch (err) {
		return {
			props: {
				hasError: true,
			},
		};
	}
}
