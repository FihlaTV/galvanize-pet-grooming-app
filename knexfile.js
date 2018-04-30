module.exports = {
  test: { client: 'pg', connection: process.env.DATABASE_URL },
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/snoop_doggy_dog_test'
  }
}
