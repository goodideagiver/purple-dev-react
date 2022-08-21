import { useRouter } from 'next/router';
import { fetchAPI } from '../../../src/lib/api';

const Post = ({ article, categories }) => {
	const router = useRouter();
	const { slug } = router.query;

	console.log(article);

	return <div>Post ID = {slug}</div>;
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
};

export default Post;
