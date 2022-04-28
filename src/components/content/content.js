import styles from './content.module.css';

import About from './about/About';
import Contact from './contact/Contact';
import Home from './home/Home';

import { useContext } from 'react';
import ActiveSection from '../../store/active-section';

const Content = () => {
	const { visibleSection } = useContext(ActiveSection);

	const returnedComponent = () => {
		switch (visibleSection) {
			case 'home':
				return <Home />;
			case 'about':
				return (
					<About
						className={`${styles.maxWidth} ${styles['section-appear']}`}
					/>
				);
			case 'contact':
				return (
					<Contact
						className={`${styles.maxWidth} ${styles['section-appear']}`}
					/>
				);
			default:
				return (
					<div>
						<p>Something went wrong when choosing component</p>
					</div>
				);
		}
	};

	return <main className={styles.padding}>{returnedComponent()}</main>;
};
export default Content;
