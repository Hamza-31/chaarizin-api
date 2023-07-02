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
	upload: {
		config: {
			provider: 'aws-s3',
			providerOptions: {
				baseUrl: env('CDN_URL'),
				rootPath: env('CDN_ROOT_PATH'),
				s3Options: {
					accessKeyId: env('AWS_ACCESS_KEY_ID'),
					secretAccessKey: env('AWS_ACCESS_SECRET'),
					region: env('AWS_REGION'),
					params: {
						ACL: env('AWS_ACL', 'public-read'),
						signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
						Bucket: env('AWS_BUCKET'),
					},
				},
			},
			actionOptions: {
				upload: {},
				uploadStream: {},
				delete: {},
			},
		},
	},

})