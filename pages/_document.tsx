import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel='apple-touch-icon' href='%PUBLIC_URL%/logo192.png' />
				<link rel='manifest' href='%PUBLIC_URL%/manifest.json' />

				<meta name='title' content='purpleblack.dev' />
				<meta name='description' content='Portfolio - Frontend Developer' />

				<meta name='theme-color' content='#1f1f1f' />

				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://purpleblack.dev/' />
				<meta property='og:title' content='purpleblack.dev' />
				<meta
					property='og:description'
					content='Portfolio - Frontend Developer'
				/>
				<meta
					property='og:image'
					content='https://purpleblack.dev/metaimage.webp'
				/>

				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://purpleblack.dev/' />
				<meta property='twitter:title' content='purpleblack.dev' />
				<meta
					property='twitter:description'
					content='Portfolio - Frontend Developer'
				/>
				<meta
					property='twitter:image'
					content='https://purpleblack.dev/metaimage.webp'
				/>
			</Head>
			<body>
				<Main />
				<div id='overlay-root'></div>
				<NextScript />
			</body>
		</Html>
	);
}
