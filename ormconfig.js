module.exports = {
  "type": "mysql",
  "host": "127.0.0.1",
  "port": 33306,
  "username": "user",
  "password": "password",
  "database": "database",
  "entities": ["src/entities/**/*.ts"],
  "migrations": ["src/db/migrations/**/*.ts"],
  "cli": {
      "entitiesDir": "src/entities",
      "migrationsDir": "src/db/migrations",
  }
}
