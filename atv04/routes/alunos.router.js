var express = require('express');
const alunoService = require('../services/aluno.service');
var router = express.Router();

//todos recebem dois parâmetros, o path e a chamada de função.
//request é o que vem do cliente e response e o que vai do servidor para o cliente.
router.get(
    "/",
    (request, response) => {
        console.log("chegou no controller");
        response.json(alunoService.findAll()); //aqui eu digo que a resposta sera como json, como parâmetro coloco o conteúdo da resposta
    }
);

module.exports = router;
