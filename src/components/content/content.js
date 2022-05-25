import React, { Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from '../UI/Footer/Footer';
import Home from './home/Home';
import LoadingSpinnerContent from './components/LoadingSpinnerContent/LoadingSpinnerContent';
import PageNotFound from '../UI/PageNotFound/PageNotFound';
import ScrollToTop from '../helpers/ScrollToTop';
import styles from './content.module.css';

const About = React.lazy(() => import('./about/About'));
const Contact = React.lazy(() => import('./contact/Contact'));

const Content = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<>
			<main className={styles.padding}>
				<Suspense fallback={<LoadingSpinnerContent />}>
					<ScrollToTop>
						<Switch>
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
							<Route path='/*'>
								<PageNotFound />
							</Route>
						</Switch>
					</ScrollToTop>
				</Suspense>
			</main>
			<Footer />
		</>
	);
};
export default Content;
