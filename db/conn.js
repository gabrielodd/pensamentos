const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('thoughts2', 'root', '', {
  host: 'localhost',
  port: '3307',
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Conectado com sucesso!')
} catch(err) {
  console.log(`Não foi possível conectar:`)
}

module.exports = sequelize