import { Sequelize } from 'sequelize';
import { DB, DB_DIALECT, DB_PASSWORD, DB_URL, DB_USER, DB_PORT, TABLE_OPS } from '../config/config';
import { log } from './logger';

export const sequelize = new Sequelize(
    DB, DB_USER, DB_PASSWORD,
    {
        host: DB_URL,
        port: DB_PORT,
        dialect: DB_DIALECT
    }
)

export const connect_db = async () => {

    await sequelize.authenticate().then(() => {
        log(`Connected to database: ${DB}`)
    }).catch((e) => {
        log(`Fail to connect, ${e}`)
    })
    
}