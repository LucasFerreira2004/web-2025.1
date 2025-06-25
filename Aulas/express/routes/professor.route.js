var express = require('express');
const professorService = require('../services/professor.service');
var router = express.Router();

//todos recebem dois parâmetros, o path e a chamada de função.
//request é o que vem do cliente e response e o que vai do servidor para o cliente.
router.get(
    "/listar",
    (request, response) => {
        response.json(professorService.listar()); //aqui eu digo que a resposta sera como json, como parâmetro coloco o conteúdo da resposta
    }
);

router.get(
    "/listar/:id",
    (request, response) => {
        response.json(professorService.listarPorId(request.params.id)); 
    }
);

router.post(
    "/criar",
    (request, response) => {
        console.log("passou pelo router")
        const novoProfessor = professorService.criar(request.body);
        response.json(novoProfessor);
    }
)

module.exports = router;
