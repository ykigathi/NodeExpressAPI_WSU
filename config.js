// config.js

export default {
    // Database configuration
    database: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 27017,
      dbName: process.env.DB_NAME || 'your_database_name',
      username: process.env.DB_USERNAME || 'your_database_username',
      password: process.env.DB_PASSWORD || 'your_database_password',
    },
  
    // API keys and secret tokens
    apiKey: process.env.API_KEY || '79dfe906-2ce4-4a3d-b465-8600208d6ebc129tw5t39n',
    jwtSecret: process.env.JWT_SECRET || '8600208d679dfe906-2ce4-4a3d-b465-ebc129tw5t39n',
  
    // Other application settings
    app: {
      port: process.env.PORT || 3000,
      environment: process.env.NODE_ENV || 'development',
    //   environment: process.env.NODE_ENV || 'production',
    },
  };
  