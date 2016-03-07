module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/album-demo'//enter in database when have
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
