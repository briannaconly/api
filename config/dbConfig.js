const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'projectdb',
  password: 'password',
  port: 5432,
})

module.exports = {
    pool,
}