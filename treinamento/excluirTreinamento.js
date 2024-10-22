const { treinamentos } = require("./treinamentos");

function excluirTreinamento(id) {
    try {
        //Função p encontrar o treinamento
        const indice = treinamentos.findIndex(elementodoarray =>
            elementodoarray.id === id
        )
        if (indice === -1) {
            console.log("Treinamento não encontrado");
        } else {
            treinamentos.splice(indice, 1);
            console.log("Treinamento deletado com sucesso!");
        }

    } catch (error) {
        console.log("Erro ao excluir o treinamento");
    }
}

module.exports = {excluirTreinamento};