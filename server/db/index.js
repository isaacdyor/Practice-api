const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'database.server.com',
    database: 'mydb',
    password: 'secretpassword',
    port: 3211,
})
module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    },
}