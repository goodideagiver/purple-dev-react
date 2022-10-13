module.exports = {
	experimental: {
		images: {
			allowFutureImage: true,
		},
	},
	images: {
		loader: 'default',
		domains: ['localhost'],
	},
	async redirects() {
		return [
			{
				source: '/ask',
				destination:
					'https://goodideagiver.github.io/how-to-ask-good-questions/',
				permanent: false,
			},
		]
	},
}
