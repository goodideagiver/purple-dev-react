import Footer from '../src/components/UI/Footer/Footer';
import NavTop from '../src/components/UI/navTop/NavTop';
import variables from '../src/variables.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NavTop />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
