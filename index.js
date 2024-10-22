const prompt = require("prompt-sync")();

const {criarTreinamento} = require("./treinamento/criarTreinamento");
const {listarTreinamento} = require("./treinamento/listarTreinamento");
const {editarTreinamento} = require("./treinamento/editarTreinamento");
const {excluirTreinamento} = require("./treinamento/excluirTreinamento");


criarTreinamento("123", "palestra", "João", "22/10/2024", "10h", "Funcionarios do RH", "acontecendo", "bom");
criarTreinamento("124", "ensinar", "Maria", "23/10/2024", "5h", "Novos funcionários", "vai acontecer", "bom");
criarTreinamento("125", "duvidas", "Marcus", "24/11/2024", "2h", "Funcionários", "vai acontecer", "bom");
listarTreinamento();

editarTreinamento("125", "duvidas", "Fernando", "24/10/2024", "2h", "Funcionários", "vai acontecer", "Importante");
listarTreinamento();

excluirTreinamento("125");
listarTreinamento();


