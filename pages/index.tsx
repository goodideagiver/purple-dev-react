import Head from 'next/head';
import { Home } from '../src/components/content/home/Home';

export const index = () => {
	return (
		<>
			<Head>
				<title>purpleblack.dev - Home</title>
			</Head>
			<Home />
		</>
	);
};
export default index;
