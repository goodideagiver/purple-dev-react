import styles from './content.module.css';

import { useState } from 'react';

import About from './about/About';
import Contact from './contact/Contact';
import Home from './home/Home';

const Content = props => {
	const [visibleSection, setVisibleSection] = useState(1);

	const changeVisibleSection = index => setVisibleSection(index);

	const sections = [<Home />, <About />, <Contact />];

	return <main className={styles.padding}>{sections[visibleSection]}</main>;
};
export default Content;
