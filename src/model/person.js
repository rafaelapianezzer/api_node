const database = require("../database");
const user = require("../model/user");

class Person {
    constructor() {
        this.model = database.db.define("people", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true, // chave única exclusiva
                autoIncrement: true // cria um novo id a cada user adicionado na tabela. autoincrementa
            },
            name: {
                type: database.db.Sequelize.STRING
            },
            address: {
                type: database.db.Sequelize.STRING,
            },
            userId: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: "users",
                    key: "id"
                }
            }
        })
    }
}

module.exports = new Person().model;