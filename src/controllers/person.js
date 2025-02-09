const ServicePerson = require("../services/person");

class ControllerPerson {
    async FindAll(req, res) {
        try {
            const result = await ServicePerson.FindAll();
            res.status(200).json({ result });
        } catch (error) { 
            res.status(500).json({ error: error.message });
        }
    }

    async FindById(req, res) {
        try {
            const { id } = req.params;
            const result = await ServicePerson.FindById(id);
            res.status(200).json({ result });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async Create(req, res) {
        try {
            const { name, address, userId } = req.body;
            await ServicePerson.Create(name, address, userId);
            res.status(201).json({ mensagem: "Usuário adicionado com sucesso" });
        } catch (error) { 
            res.status(500).json({ error: error.message });
        }
    }

    async Update(req, res) {
        try {
            const { id } = req.params;
            const { name, address } = req.body;
            const result = await ServicePerson.Update(id, name, address); 
            res.status(200).json({ result });
        } catch (error) { 
            res.status(500).json({ error: error.message });
        }
    }

    async Delete(req, res) {
        try {
            const { id } = req.params;
            await ServicePerson.Delete(id);
            res.status(204).send(); 
        } catch (error) { 
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ControllerPerson(); 
