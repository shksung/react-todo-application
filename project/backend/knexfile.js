module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    user: 'kevinsung', // or other user if you made one
    password: '',
    database: 'todo-database'
  }
};