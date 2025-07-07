import Product from "./Product.js";
/*
- CRIAR UMA PROMESSA (PROMISE);
- A PROMESSA DEMORA 4 SEGUNDOS PARA SER RESOLVE OU REJECT;
- RETORNAR A PROMESSA POR UMA FUNÇÃO;
- DENTRO DA PROMISE, GERAR UM NÚMERO ALEATÓRIO;
- SE O NÚMERO FOR PAR (RESOLVE) E RETORNA UMA LISTA DE PRODUTOS DE PELO MENOS 10 ITENS NO SEGUINTE FORMATO:

{ID,NOME,TIPO,PREÇO} 

- SE O NÚMERO FOR ÍMPAR (REJECT) E RETORNA UM OBJETO DE ERRO

{"RES":"ERROR";MSG:"ERRO NO SISTEMA"}
*/
function sleep(miliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, miliseconds)
    });
}


export default function getProducts(){
    return new Promise(async (resolve, reject) => {
       // await sleep(1000);
        let randomNumber = Math.random() * 100;
        randomNumber = Math.ceil(randomNumber)
        console.log(randomNumber);
        if (randomNumber % 2 == 0) {
            console.log("aceito");
            resolve(getList());
        } else {
            reject(new ErrorMsg("error", "erro no sistema"));
        }
    });
}
    function getList() {
        return [
            new Product("amaciante", 8.90),
            new Product("sabonete", 0.99),
            new Product("sabao", 5.99),
            new Product("biscoito", 0.99),
            new Product("macarrao", 3.99),
            new Product("arroz", 3.50),
            new Product("feijao", 3.99),
            new Product("farinha", 5.00),
            new Product("acucar", 1.50),
            new Product("refrigerante", 6.00)
        ]
    }

class ErrorMsg{
    constructor(res, msg){
        this.res = res
        this.msg = msg
    }
}
