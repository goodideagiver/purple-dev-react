import './main.css';

import { useState } from 'react';
import NavTop from './components/UI/navTop/NavTop';
import Content from './components/content/content';
// import Modal from './components/modal/Modal';

function App() {
	const [visibleSection, setVisibleSection] = useState(1);

	return (
		<>
			<NavTop
				navButtons={[
					{
						name: 'Home',
						callback: () => setVisibleSection(0),
					},
					{ name: 'About', callback: () => setVisibleSection(1) },
					{
						name: 'Github',
						callback: () =>
							(window.location.href =
								'https://github.com/goodideagiver'),
					},
					{ name: 'Contact', callback: () => setVisibleSection(2) },
				]}
			></NavTop>
			<Content activeSection={visibleSection} />
			{/* <Modal title='Siema z rana' /> */}
		</>
	);
}

export default App;
