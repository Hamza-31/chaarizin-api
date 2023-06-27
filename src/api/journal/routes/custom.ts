module.exports = {
	routes: [
		{
			method: "GET",
			path: "journals/:slug",
			handler: "journal.findOne",
			config: {
				auth: false
			}
		}
	]
}