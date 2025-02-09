const database = require("../database");
const person = require("./person");

class User {
    constructor() {
        this.model = database.db.define("users", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true, // chave única exclusiva
                autoIncrement: true // cria um novo id a cada user adicionado na tabela. autoincrementa
            },
            email: {
                type: database.db.Sequelize.STRING,
                unique: true // nao pode ter mais emails iguais
            },
            password: {
                type: database.db.Sequelize.STRING
            }
        })

        this.model.hasOne(person, {
            foreignKey: 'userId'
        })
        person.belongsTo(this.model, {
            foreignKey: 'userId'
        })
    }
}

module.exports = new User().model;