import dotenv from 'dotenv'

dotenv.config()

if (
  !process.env.DATABASE_URL
) {
  throw new Error('Please configure the database environment variables first!')
}

export = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  ssl: true,
  searchPath: ['knex', 'public'],
  seeds: {
    directory: './src/db/seeds',
  },
  migrations: {
    directory: './src/db/migrations',
  },
}
