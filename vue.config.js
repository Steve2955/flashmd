module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/flashmd/'
		: '/',
	pwa: {
		name: "FlashMD"
	},
}
