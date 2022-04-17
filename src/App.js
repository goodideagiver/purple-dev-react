import { useState } from 'react';

import NavTop from './components/UI/navTop/NavTop';

function App() {
	const [modalOpen, setModalOpen] = useState(true);

	const toggleModal = () => {
		setModalOpen(prev => (prev ? false : true));
	};

	return <NavTop />;
}

export default App;
