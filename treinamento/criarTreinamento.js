const { treinamentos } = require("./treinamentos");

function criarTreinamento(id, titulo, instrutor, data, duracao, participantes, status, feedback){
    const novoTreinamento = {id, titulo, instrutor, data, duracao, participantes, status, feedback};
    try {
        treinamentos.push(novoTreinamento);
    } catch (error) {
        console.error("Erro ao cadastrar dados do treinamento", error.message)
    }
}


module.exports = {criarTreinamento};