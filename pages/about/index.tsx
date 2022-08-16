import Head from 'next/head';
import About from '../../src/components/content/about/About';

const index = () => {
	return (
		<>
			<Head>
				<title>purpleblack.dev - About</title>
			</Head>
			<About />
		</>
	);
};

export default index;
