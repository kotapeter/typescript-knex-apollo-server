import dotenv from 'dotenv'
const parse = require('pg-connection-string').parse

dotenv.config()

if (
  !process.env.DATABASE_URL
) {
  throw new Error('Please configure the database environment variables first!')
}

const config = parse(process.env.DATABASE_URL)

export = {
  client: 'pg',
  connection: {
    host: config.host,
    user: config.user,
    password: config.password,
    port: config.port,
    database: config.database,
    ssl: {
      ca: process.env.CA_CERT
    }
  },
  searchPath: ['knex', 'public'],
  seeds: {
    directory: './src/db/seeds',
  },
  migrations: {
    directory: './src/db/migrations',
  },
}
