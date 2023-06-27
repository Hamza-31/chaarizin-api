export default ({ env }) => ({
	meilisearch: {
		config: {
			article: {
				settings: {
					filterableAttributes: ['category'],
					sortableAttributes: ['createdAt']
				},
				transformEntry({ entry }) {
					return {
						...entry,
						category: entry.category.name, // map categories to only have categories name.
					}
				},
			},

		}
	},
	email: {
		config: {
			provider: 'sendgrid',
			providerOptions: {
				apiKey: env('SENDGRID_API_KEY'),
			},
			settings: {
				defaultFrom: env("SENDGRID_EMAIL_FROM"),
				defaultReplyTo: env("SENDGRID_EMAIL_TO"),
			},
		},
	},

})