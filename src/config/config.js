/**
 * Archivo encargado de configurar las key de la aplicacion, la libreria 
 * dotenv se encarga de cargar el archivo .env y en caso de no encontrarlo 
 * los valores de process.env van a ser undefined, por lo que los valores 
 * asignados son los definidos en este archivo.
 */
require('dotenv').config()

module.exports = {
  PORT: process.env.PORT || 3000,
  CONNECTION_NAME: process.env.CONNECTION_NAME || 'development',
  NODE_ENV: process.env.NODE_ENV || 'development',
  JWT_SECRET: process.env.JWT_SECRET || 'secretToken',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || 1,                      // Hours
  JWT_REFRESH_EXPIRATION: process.env.JWT_REFRESH_EXPIRATION || 72,     // Hours
  JWT_RESET_PASSWORD: process.env.JWT_RESET_PASSWORD || 168,        // Hours
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  REDIS_HOST: process.env.REDIS_HOST || '127.0.0.1',
}