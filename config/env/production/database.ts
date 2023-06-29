const parseUrl = require('parse-url')
const knex = require('knex')
module.exports = ({ env }) => {
	const { protocol:client,host, port, database, user, password } = parseUrl(env("CLEARDB_DATABASE_URL"));

	return knex({
		connection: {
			client,
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