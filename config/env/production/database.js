const parseUrl = require('parse-url')
var knex = require('knex');
module.exports = ({ env }) => {
	const { host, port, database, user, password } = parseUrl(env("JAWSDB_URL"));

	return knex({
		connection: {
			client: 'mysql',
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