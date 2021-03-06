import { Link } from 'react-router-dom';
import styles from './FooterNavigation.module.css';

const FooterNavigation = () => {
	const pagesUrls = [
		{ name: 'About', url: '/about' },
		{
			name: 'GitHub',
			url: 'https://github.com/goodideagiver',
			type: 'external',
		},
		{ name: 'Contact', url: '/contact' },
	];

	const linkElements = pagesUrls.map((page, index) => {
		return (
			<li key={index}>
				{page.type !== 'external' ? (
					<Link className='acrylic' to={page.url}>
						{page.name}
					</Link>
				) : (
					<a className='acrylic' href={page.url}>
						{page.name}
					</a>
				)}
			</li>
		);
	});

	return <ul className={styles.ul}>{linkElements}</ul>;
};

export default FooterNavigation;
