const { treinamentos } = require("./treinamentos");

function editarTreinamento(id, novoTitulo, novoInstrutor, novaData, novaDuracao, novosParticipantes, novoStatus, novoFeedback) {
    try {
        //Função para encontrar um treinamento
        const treinamento = treinamentos.find(elementodoarray =>
            elementodoarray.id === id
        )
        //verificar se o treinamentp procurado existe
        if(treinamento){
            treinamento.titulo = novoTitulo,
            treinamento.instrutor = novoInstrutor,
            treinamento.data = novaData,
            treinamento.duracao = novaDuracao,
            treinamento.participantes = novosParticipantes,
            treinamento.status = novoStatus,
            treinamento.feedback = novoFeedback
            console.log("Dados do treinamento editado com sucesso!")
        } 
        else {
            console.log("Treinamento não encontrado!");
        }

    } catch (error) {
        console.error("Erro ao editar dados do treinamento", error.message);
    }
}

module.exports = {editarTreinamento};