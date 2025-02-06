const banco = new Array ("Joao", "Ana", "Junior");

class RepositoryPessoa {
    PegarTodos(){
        return banco
    }

    PegarUm(index){
        return banco[index]
    }

    Adicionar(nome){
        banco.push(nome)
    }

    Alterar(index, nome){
        banco[index] = nome
    }

    Deletar(index){
        banco.splice(index, 1)
    }
}

module.exports = RepositoryPessoa;