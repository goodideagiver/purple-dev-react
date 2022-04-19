import ActiveSection from './store/active-section';

import './main.css';

import { useState } from 'react';
import NavTop from './components/UI/navTop/NavTop';
import Content from './components/content/content';
import Modal from './components/modal/Modal';

function App() {
	const [visibleSection, setVisibleSection] = useState('home');
	const [modalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(modalVisible ? false : true);
	};

	return (
		<>
			<ActiveSection.Provider
				value={{ visibleSection, setVisibleSection }}
			>
				<NavTop
					navButtons={[
						{
							name: 'Home',
							callback: () => setVisibleSection('home'),
						},
						{
							name: 'About',
							callback: () => setVisibleSection('about'),
						},
						{
							name: 'Github',
							type: 'anchor',
							link: 'https://github.com/goodideagiver',
						},
						{
							name: 'Contact',
							callback: () => setVisibleSection('contact'),
						},
					]}
				></NavTop>
				<Content />
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
			</ActiveSection.Provider>
		</>
	);
}

export default App;
