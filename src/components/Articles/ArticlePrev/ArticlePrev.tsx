import Link from 'next/link';
import Moment from 'react-moment';
import classes from './ArticlePrev.module.css';

type Props = {
	href: string;
	category: string;
	title: string;
	description: string;
	publishedAt: string;
};

export const ArticlePrev = ({
	href,
	category,
	title,
	description,
	publishedAt,
}: Props) => {
	return (
		<Link href={href}>
			<article className={classes.root}>
				<div className={classes.header}>
					<h2>{title}</h2>
					<p className={classes.type}>{category}</p>
				</div>
				<p>{description}</p>
				<Moment className={classes.date} format='DD MMM YYYY'>
					{publishedAt}
				</Moment>
			</article>
		</Link>
	);
};
