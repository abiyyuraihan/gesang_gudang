import { Sequelize } from "sequelize";
import gudang from "../config/Database.js";
import Jenis from "./JenisModel.js";

const {DataTypes} = Sequelize;

const Gudang = gudang.define('gudang', {
    name: DataTypes.STRING
}, {
    freezeTableName:true
})

Gudang.hasMany(Jenis, { foreignKey: 'gudang_id' })

export default Gudang;

(async()=>{
    await gudang.sync();
})();