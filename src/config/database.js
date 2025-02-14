module.exports = ({ env }) => ({
  connection: {
    client: "mongo",
    connection: {
      uri: env("DATABASE_URI"),
      ssl: env.bool("DATABASE_SSL", true),
    },
    debug: false,
  },
});
