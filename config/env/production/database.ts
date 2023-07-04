import parseUrl from 'parse-url';
module.exports = () => {
	return {
		connection: {
			client: process.env.RDS_CLIENT,
			connection: {
				host: process.env.RDS_DB_HOST,
				port: process.env.RDS_PORT,
				database: process.env.RDS_DB_NAME,
				user: process.env.RDS_USER,
				password: process.env.RDS_PASSWORD,
				ssl: { rejectUnauthorized: false },
			},
			// pool: {
			// 	min: 2,
			// 	max: 8
			// },
			debug: false,

		},

	}
};