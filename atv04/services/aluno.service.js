const alunoModal = require("../model/aluno.model");
const alunosData = require("../data/alunosData");

module.exports = class alunoService {
    static findAll(){
        return alunosData;
    }
}