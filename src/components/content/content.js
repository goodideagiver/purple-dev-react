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
			{visibleSection === 'about' && <About />}
			{visibleSection === 'contact' && <Contact />}
		</main>
	);
};
export default Content;
