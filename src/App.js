import './main.css';

// import { useState } from 'react';
import NavTop from './components/UI/navTop/NavTop';
import Content from './components/content/content';
// import Modal from './components/modal/Modal';

function App() {
	return (
		<>
			<NavTop
				navButtons={[
					{ name: 'Home' },
					{ name: 'About' },
					{ name: 'Github' },
					{ name: 'Contact' },
				]}
			></NavTop>
			<Content />
			{/* <Modal title='Siema z rana' /> */}
		</>
	);
}

export default App;
