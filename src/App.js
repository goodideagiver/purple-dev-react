import './main.css';

import { useState } from 'react';
import NavTop from './components/UI/navTop/NavTop';
import Content from './components/content/content';
import Modal from './components/modal/Modal';

function App() {
	const [visibleSection, setVisibleSection] = useState(1);
	const [modalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(modalVisible ? false : true);
	};

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
						callback: toggleModal,
					},
					{ name: 'Contact', callback: () => setVisibleSection(2) },
				]}
			></NavTop>
			<Content activeSection={visibleSection} setVisibleSection={setVisibleSection} />
			{modalVisible && (
				<Modal
					modalCloseHandler={toggleModal}
					title='My GitHub profile'
				>
					You can check out more of my work on my{' '}
					{<a href='https://github.com/goodideagiver'>GitHub</a>}{' '}
					profile.
				</Modal>
			)}
		</>
	);
}

export default App;
