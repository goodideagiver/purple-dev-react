import Head from 'next/head';
import { PageNotFound } from '../../src/components/UI/PageNotFound/PageNotFound';

export default function Custom404() {
	return (
		<>
			<Head>
				<title>purpleblack.dev - Page not found</title>
				<meta name='robots' content='follow, noarchive, noindex'></meta>
			</Head>
			<PageNotFound />
		</>
	);
}
