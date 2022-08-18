import Footer from '../src/components/UI/Footer/Footer';
import NavTop from '../src/components/UI/navTop/NavTop';
import '../src/variables.css';
import '../src/index.css';
import '../src/assets/css/acrylic.css';
import { Content } from '../src/components/content/content';
import { ScrollToTopBtn } from '../src/components/UI/scrollToTopBtn/ScrollToTopBtn';
import Script from 'next/script';
import Head from 'next/head';

const Analitycs = () => (
	<>
		<Script
			strategy='lazyOnload'
			src={`https://www.googletagmanager.com/gtag/js?id=G-XV8Q7M8G5F`}
		/>

		<Script id='g-script' strategy='lazyOnload'>
			{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-XV8Q7M8G5F', {
                    page_path: window.location.pathname,
                    });
                `}
		</Script>
	</>
);

type MyAppProps = {
	Component: React.ComponentType<any>;
	pageProps: any;
};

function MyApp({ Component, pageProps }: MyAppProps) {
	return (
		<>
			<Head>
				<link rel='shortcut icon' href='/favicon.ico' />
				<link rel='manifest' href='/manifest.json' />
			</Head>
			<Analitycs />
			<Content>
				<NavTop />
				<Component {...pageProps} />
				<Footer />
				<ScrollToTopBtn />
			</Content>
		</>
	);
}

export default MyApp;
