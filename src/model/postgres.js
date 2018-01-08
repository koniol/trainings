const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'koniol',
  host: '192.168.1.157',
  database: 'trainings',
  password: 'koniol22',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})