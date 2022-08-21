import { Articles } from '../../src/components/Articles/Articles';
import { fetchAPI } from '../../src/lib/api';

type Props = {
	articles: any;
	categories: any;
	homepage: any;
};

const Posts = ({ articles, categories, homepage }: Props) => {
	return <Articles articles={articles} />;
};

export default Posts;

export async function getStaticProps() {
	// Run API calls in parallel
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
		revalidate: 1,
	};
}
