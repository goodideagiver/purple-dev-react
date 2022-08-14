import Footer from '../src/components/UI/Footer/Footer';
import NavTop from '../src/components/UI/navTop/NavTop';
import '../src/variables.css';
import '../src/index.css';
import '../src/assets/css/acrylic.css';
import { Content } from '../src/components/content/Content';

function MyApp({ Component, pageProps }) {
	return (
		<Content>
			<NavTop />
			<Component {...pageProps} />
			<Footer />
		</Content>
	);
}

export default MyApp;
