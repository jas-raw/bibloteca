import { DataTypes, Model } from "sequelize"
import { sequelize } from "../frameworks_and_drivers/drivers/db"

export class BookModel extends Model {}

BookModel.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }

},{
    tableName: "book",
    sequelize
})

export default BookModel

