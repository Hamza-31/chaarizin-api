import parseUrl from 'parse-url';
const config = parseUrl(process.env.JAWSDB_URL)
module.exports = ({ env }) => {
	return {
		connection: {
			client: config['protocol'],
			connection: {
				host: config['host'],
				port: config['port'],
				database: process.env.JAWS_DB,
				user: config['user'],
				password: config['password'],
				ssl: { rejectUnauthorized: false },
			},
			debug: false,
		},
	}
};