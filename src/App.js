import NavTop from './components/UI/navTop/NavTop';
import Content from './components/content/Content';

import ScrollToTopBtn from './components/UI/scrollToTopBtn/ScrollToTopBtn';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<>
			<NavTop />
			<Content />
			<ScrollToTopBtn />
		</>
	);
}

export default App;
