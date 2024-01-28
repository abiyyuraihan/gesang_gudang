import { ForeignKeyConstraintError, Sequelize } from "sequelize";
import gudang from "../config/Database.js";
import Gudang from "./GudangModel.js";

const {DataTypes} = Sequelize;

const Jenis = gudang.define('jenis', {
    name: DataTypes.STRING,
    gudang_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName:true
});

Jenis.belongsTo(Gudang, {foreignKey: 'gudang_id'})

export default Jenis;

(async()=>{
    await gudang.sync();
})();