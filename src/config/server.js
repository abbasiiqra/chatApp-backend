module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 10000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '050258475b6c4a80d8e5427be413042c'),
    },
  },
});
