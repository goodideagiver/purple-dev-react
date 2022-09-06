import Footer from '../src/components/UI/Footer/Footer';
import NavTop from '../src/components/UI/navTop/NavTop';
import '../src/variables.css';
import '../src/index.css';
import '../src/assets/css/acrylic.css';
import { Content } from '../src/components/content/content';
import { ScrollToTopBtn } from '../src/components/UI/scrollToTopBtn/ScrollToTopBtn';
import Script from 'next/script';
import Head from 'next/head';

import { createContext } from 'react';
import { useRouter } from 'next/router';

export const GlobalContext = createContext({});

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

type Props = {
	Component: React.ComponentType<any>;
	pageProps: any;
};

function MyApp({ Component, pageProps }: Props) {
	const router = useRouter();
	const isOnMainPage = router.pathname === '/';

	return (
		<>
			<Head>
				<link rel='shortcut icon' />
				<link rel='manifest' href='/manifest.json' />
			</Head>
			<Analitycs />
			<Content>
				<NavTop mainPage={isOnMainPage} />
				<Component {...pageProps} />
				<Footer />
				<ScrollToTopBtn />
			</Content>
		</>
	);
}

export default MyApp;
