const parseUrl = require('parse-url')
module.exports = ({ env }) => {
	const { host, port, database, user, password } = parseUrl(env("JAWSDB_URL"));

	return {
		connection: {
			client: 'mysql2',
			connection: {
				host,
				port,
				database,
				user,
				password,
				ssl: { rejectUnauthorized: false },
			},
			debug: false,
		},
	}
};