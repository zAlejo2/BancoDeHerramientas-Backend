import dotenv from 'dotenv';
dotenv.config();

const config = {
    app: {
        port: Number(process.env.PORT) || 10000
    }, 
    jwt: {
        secret: process.env.JWT_SECRET,
        secretnewcontrasena: process.env.JWT_SECRET_RESTABLECER_CONTRASENA
    },
  mysql: {
  host: process.env.MYSQL_HOST, // Solo usa el definido en .env
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: Number(process.env.MYSQL_PORT) || 3306
},

    email: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT) || 587
    }
};

export default config;
