import styles from './content.module.css';

import About from './about/About';
import Contact from './contact/Contact';
import Home from './home/Home';

const Content = ({ activeSection, setVisibleSection }) => {
	return (
		<main className={styles.padding}>
			{activeSection === 0 && (
				<Home showContactHandler={setVisibleSection} />
			)}
			{activeSection === 1 && <About />}
			{activeSection === 2 && <Contact />}
		</main>
	);
};
export default Content;
