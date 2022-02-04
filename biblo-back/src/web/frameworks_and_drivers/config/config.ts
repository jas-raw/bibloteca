import dotenv from "dotenv"

dotenv.config();

export const PORT = parseInt(process.env.PORT || "8080")

export const DB_URL = process.env.DB_URL || "localhost"
export const DB_PORT = parseInt(process.env.DB_PORT || "5432")
export const DB_USER = process.env.DB_USER || "root"
export const DB_PASSWORD = process.env.DB_PASSWORD || "root"
export const DB = process.env.DB || "test"
export const DB_DIALECT = "postgres"

export const UNAUTHORIZED = 401
export const NOTFOUND = 404
export const SUCCESSFUL = 200
export const CREATED = 201
export const NO_CONTENT = 204
export const SERVERERROR = 500

export const TABLE_OPS = { alter: true }
