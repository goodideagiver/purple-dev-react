import NavTop from './components/UI/navTop/NavTop';
import Content from './components/content/Content';

import ScrollToTopBtn from './components/UI/scrollToTopBtn/ScrollToTopBtn';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<NavTop />
			<Content />
			<ScrollToTopBtn />
		</BrowserRouter>
	);
}

export default App;
