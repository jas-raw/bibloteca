
import { DataTypes, Model } from "sequelize"
import { sequelize } from "../frameworks_and_drivers/drivers/db"

class UserModel extends Model {}

UserModel.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},{
    tableName: "user",
    sequelize
})

export default UserModel
