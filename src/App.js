import { useState } from 'react';

import Modal from './components/modal/Modal';

function App() {
	const [modalOpen, setModalOpen] = useState(true);

	const toggleModal = () => {
		setModalOpen(prev => (prev ? false : true));
	};

	return (
		<>
			{modalOpen && (
				<Modal modalCloseHandler={toggleModal} title='Powitanie'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Debitis distinctio accusantium quia, cumque nam delectus
						quam alias omnis praesentium laboriosam dolorum
						inventore, quisquam quos harum magni recusandae mollitia
						modi quae.
					</p>
				</Modal>
			)}
			<button onClick={toggleModal}>siema</button>
		</>
	);
}

export default App;
