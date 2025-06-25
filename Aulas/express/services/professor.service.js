const ProfessoModel = require("../models/professor.model");
const professores = require("../data/professores");

module.exports = class professorService {
    static listar(){
        return professores;
    }

    static listarPorId(id){
        for(let i=0; i<professores.length; i++)
            if(professores[i].id == id) return professores[i];
        return null;
    }

    static criar(professor){
        console.log("chegou aqui")
        const novoProfessor = new professor(
            null,
            professor.nome,
            professor.titulacao,
            professor.imagem
        )
        return novoProfessor;
    }
}