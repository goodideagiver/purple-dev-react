import styles from './content.module.css';

import About from './about/About';
import Contact from './contact/Contact';
import Home from './home/Home';

import Footer from '../UI/Footer/Footer';

import { Route } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollToTop from '../helpers/ScrollToTop';

const Content = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<>
			<main className={styles.padding}>
				<ScrollToTop>
					<Route path='/' exact component={Home} />
					<Route path='/home'>
						<Home />
					</Route>
					<Route path='/about'>
						<About
							className={`${styles.maxWidth} ${styles['section-appear']}`}
						/>
					</Route>
					<Route path='/contact'>
						<Contact
							className={`${styles.maxWidth} ${styles['section-appear']}`}
						/>
					</Route>
				</ScrollToTop>
			</main>
			<Footer />
		</>
	);
};
export default Content;
