module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        uri: env("DATABASE_URI", "mongodb://localhost:27017/strapi"),
      },
      options: {
        ssl: env.bool("DATABASE_SSL", false),
      },
    },
  },
});
