import Footer from '../src/components/UI/Footer/Footer';
import NavTop from '../src/components/UI/navTop/NavTop';
import '../src/variables.css';
import '../src/index.css';
import '../src/assets/css/acrylic.css';
import { Content } from '../src/components/content/Content';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<script
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>

			<script strategy='lazyOnload'>
				{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
			</script>
			<Content>
				<NavTop />
				<Component {...pageProps} />
				<Footer />
			</Content>
		</>
	);
}

export default MyApp;
