const config = {}

config.port = 3001
config.db = {
  host: 'localhost',
  port: 27017,
  name: 'mongo_db_schema'
}

config.db_connection_str = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`

module.exports = config
