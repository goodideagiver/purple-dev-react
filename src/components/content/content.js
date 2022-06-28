import React, { Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from '../UI/Footer/Footer';
import LoadingSpinnerContent from './components/LoadingSpinnerContent/LoadingSpinnerContent';
import ScrollToTop from '../helpers/ScrollToTop';
import styles from './content.module.css';

const About = React.lazy(() => import('./about/About'));
const Contact = React.lazy(() => import('./contact/Contact'));
const Home = React.lazy(() => import('./home/Home'));
const PageNotFound = React.lazy(() =>
	import('../UI/PageNotFound/PageNotFound')
);

const Content = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<>
			<main className={styles.root}>
				<Suspense fallback={<LoadingSpinnerContent />}>
					<ScrollToTop>
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/home' component={Home} />
							<Route path='/about' component={About} />
							<Route path='/contact' component={Contact} />
							<Route path='/*' component={PageNotFound} />
						</Switch>
					</ScrollToTop>
					<Footer />
				</Suspense>
			</main>
		</>
	);
};
export default Content;
