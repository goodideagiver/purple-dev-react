import styles from './content.module.css';

import About from './about/About';
import Contact from './contact/Contact';
import Home from './home/Home';

const Content = props => {
	const sections = [<Home />, <About />, <Contact />];

	return (
		<main className={styles.padding}>{sections[props.activeSection]}</main>
	);
};
export default Content;
