const parseUrl = require('parse-url')
const knex = require('knex')
module.exports = ({ env }) => {
	const { host, port, database, user, password,protocol } = parseUrl(env("CLEARDB_DATABASE_URL"));

	return knex({
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
	})
};