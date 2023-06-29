const parseUrl = require('parse-url')
module.exports = ({ env }) => {
	const { host, port, database, user, password,protocol } = parseUrl(env("CLEARDB_DATABASE_URL"));

	return {
		connection: {
			client: protocol,
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