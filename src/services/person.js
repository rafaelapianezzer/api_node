const person = require("./../model/person");
const user = require("./../model/user");

class ServicePerson {
    async FindAll(){
        return person.findAll();
    } 

    async FindById(id){
        return  person.findByPk(id, { include: { model: user } })
    } 

    async Create(name, address, userId){
        if(!name){
            throw new Error("Favor informar o nome")
        } else if (!address){
            throw new Error("Favor informar o endereço")
        } else if (!userId){
            throw new Error("Favor informar o UserId ")
        }

        await person.create({ 
            name, address, userId
         });
    } 

    async Update(id, name, address){
        const oldPerson = await this.FindById(id)

        if(!name){
            throw new Error("Favor informar nome")
        } else if (!address){
            throw new Error("Favor informar endereço")
        } 

        oldPerson.name = name
        oldPerson.address = address
    
        oldPerson.save()

        return oldPerson
    } 

    async Delete(id){
       const person = await this.FindById(id)
       person.destroy()
    } 
}

module.exports = new ServicePerson();