import parseUrl from 'parse-url';
// import knex from 'knex';
const config = parseUrl(process.env.CLEARDB_DATABASE_URL)
module.exports = ({ env }) => {
	// const { protocol:client,host, port, database, user, password } = parseUrl(env("CLEARDB_DATABASE_URL"));

	return {
		connection: {
			client: config['protocol'],
			connection: {
				host: config['host'],
				port: config['port'],
				database: config['database'],
				user: config['user'],
				password: config['password'],
				ssl: { rejectUnauthorized: false },
			},
			debug: false,
		},
	}
};