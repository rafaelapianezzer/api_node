const ServiceUser = require("../services/user");

class ControllerUser {
    async FindAll(req, res) {
        try {
            const result = await ServiceUser.FindAll();
            res.status(200).json({ result });
        } catch (error) { 
            res.status(500).json({ error: error.message });
        }
    }

    async FindById(req, res) {
        try {
            const { id } = req.params;
            const result = await ServiceUser.FindById(id);
            res.status(200).json({ result });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async Create(req, res) {
        try {
            const { email, password } = req.body;
            await ServiceUser.Create(email, password);
            res.status(201).json({ mensagem: "Usuário adicionado com sucesso" });
        } catch (error) { 
            res.status(500).json({ error: error.message });
        }
    }

    async Update(req, res) {
        try {
            const { id } = req.params;
            const { email, password } = req.body;
            const result = await ServiceUser.Update(id, email, password); 
            res.status(200).json({ result });
        } catch (error) { 
            res.status(500).json({ error: error.message });
        }
    }

    async Delete(req, res) {
        try {
            const { id } = req.params;
            await ServiceUser.Delete(id);
            res.status(204).send(); 
        } catch (error) { 
            res.status(500).json({ error: error.message });
        }
    }

    async Login(req, res) {
        try {
            const { email, password } = req.body
            const token = await ServiceUser.Login(email, password)

            res.status(200).send( { token })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
}

module.exports = new ControllerUser(); 
