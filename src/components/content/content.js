import styles from './content.module.css';

import About from './about/About';
import Contact from './contact/Contact';
import Home from './home/Home';

import { useContext } from 'react';
import ActiveSection from '../../store/active-section';

const Content = () => {
	const { visibleSection } = useContext(ActiveSection);

	return (
		<main className={styles.padding}>
			{visibleSection === 'home' && <Home />}
			{visibleSection === 'about' && (
				<About className={styles.maxWidth} />
			)}
			{visibleSection === 'contact' && (
				<Contact className={styles.maxWidth} />
			)}
		</main>
	);
};
export default Content;
