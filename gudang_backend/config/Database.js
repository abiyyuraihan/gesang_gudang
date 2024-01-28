import { Sequelize } from "sequelize";

const gudang = new Sequelize('gesang_gudang', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default gudang;