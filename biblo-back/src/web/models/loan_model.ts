import { DataTypes, Model } from "sequelize"
import { sequelize } from "../frameworks_and_drivers/drivers/db"

class LoanModel extends Model {}

LoanModel.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },

    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
    
},{
    tableName: "loan",
    sequelize
})

export default LoanModel