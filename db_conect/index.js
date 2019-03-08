const mysql = require('mysql')

const db = require('../connect_db')

const data = mysql.createConnection({
    host: db.localhost,
    user: db.user,
    password: db.password,
    database: db.database
})

data.connect((err) => {
    if (err) throw err;
    console.log('Database o/')
})

module.exports = data