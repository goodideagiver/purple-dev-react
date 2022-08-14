import React, { Suspense, useEffect } from 'react';

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
	// const location = useLocation();

	// useEffect(() => {
	// 	if (location?.state?.from === 'ProjectCard') return;
	// 	window.scrollTo(0, 0);
	// });
	//todo fix router

	return (
		<>
			<main className={styles.root}>
				<Suspense fallback={<LoadingSpinnerContent />}>
					<Footer />
				</Suspense>
			</main>
		</>
	);
};
export default Content;
