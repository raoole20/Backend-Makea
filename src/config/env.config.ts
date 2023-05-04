export const EnvConfiguration = () => ({
  eniviroment: process.env.NODE_ENV || 'development',
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
  },
});
