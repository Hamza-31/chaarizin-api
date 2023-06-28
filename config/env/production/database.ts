module.exports = ({ env }) => {
	const { host, port, database, user, password } = JSON.parse(env("CLEARDB_DATABASE_URL"));

	return {
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
	}
};