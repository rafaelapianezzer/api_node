const user = require("./../model/user");

class ServiceUser {
    async FindAll(){
        return user.findAll();
    } 

    async FindById(id){
        return  user.findByPk(id);
    } 

    async Create(email, password){
        if (!email){
            throw new Error("Favor informar email")
        } else if (!password){
            throw new Error("Favor informar senha")
        }

        await user.create({ 
            email, password
         });
    } 

    async Update(id, email, password){
        const oldUser = await this.FindById(id)

        if (!email){
            throw new Error("Favor informar email")
        } else if (!password){
            throw new Error("Favor informar senha")
        }
        
        oldUser.email = email
        oldUser.password = password

        oldUser.save()

        return oldUser
    } 

    async Delete(id){
       const user = await this.FindById(id)
       user.destroy()
    } 
}

module.exports = new ServiceUser();