import ReactMarkdown from 'react-markdown';
import { Layout } from './Layout/Layout';

type Props = {
	article: any;
	categories: any;
};

export const Article = ({ article, categories }: Props) => {
	return (
		<Layout>
			<h2>{article.attributes.title}</h2>
			<ReactMarkdown>{article.attributes.content}</ReactMarkdown>
		</Layout>
	);
};
