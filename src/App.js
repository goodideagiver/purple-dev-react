import ActiveSection from './store/active-section';

import './main.css';

import { useEffect, useState } from 'react';
import NavTop from './components/UI/navTop/NavTop';
import Content from './components/content/Content';
import Modal from './components/modal/Modal';
import ScrollToTopBtn from './components/UI/scrollToTopBtn/ScrollToTopBtn';

function App() {
	const [visibleSection, setVisibleSection] = useState('home');
	const [modalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(modalVisible ? false : true);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [visibleSection]);

	return (
		<>
			<ActiveSection.Provider
				value={{ visibleSection, setVisibleSection }}
			>
				<NavTop />
				<Content />
				<ScrollToTopBtn />
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
