const RepositoryPessoa = require("../repository/pessoa");

const repo = new RepositoryPessoa();


class ServicePessoa {
    PegarTodos(){
        return repo.PegarTodos();
    } 
    PegarUm(id){
        return repo.PegarUm(id);
    } 
    Adicionar(nome){
        return repo.Adicionar(nome);
    } 
    Alterar(id, nome){
        return repo.Alterar(id, nome);
    } 
    Deletar(id){
        return repo.Deletar(id);
    } 
}

module.exports = ServicePessoa;