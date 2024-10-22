const { treinamentos } = require("./treinamentos");

function listarTreinamento() {
    try {
        console.table(treinamentos);

    } catch (error) {
    console.error("Erro ao listar treinamento", error.message);
    }
};

module.exports = {listarTreinamento};