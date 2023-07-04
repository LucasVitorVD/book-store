import { Sequelize } from "sequelize"

const sequelize = new Sequelize(
  'bookstore',
  'root',
  'SetRootPasswordHere',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
)

try {
  sequelize.authenticate()
  console.log('Authenticated!')
} catch (err) {
  console.log(err)
}

export default sequelize