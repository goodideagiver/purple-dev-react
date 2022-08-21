import Image from 'next/future/image';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import { fetchAPI } from '../../../lib/api';
import { getStrapiMedia } from '../../../lib/media';

import { Layout } from './Layout/Layout';

type Props = {
	article: any;
	categories: any;
};

export const Article = ({ article, categories }: Props) => {
	console.log(
		article.attributes.author.data.attributes.picture.data.attributes.url
	);

	return (
		<Layout>
			<h1>{article.attributes.title}</h1>
			<ReactMarkdown disallowedElements={['iframe', 'h1']}>
				{article.attributes.content}
			</ReactMarkdown>
			<div>
				<p>Author: {article.attributes.author.data.attributes.name}</p>
				<p>
					<Moment format='DD MMM YYYY'>
						{article.attributes.published_at}
					</Moment>
				</p>
			</div>
		</Layout>
	);
};
