// Função: Blocode código Reutilizável.

// A palavra reservada function define uma função
// É necessário definir um nome da função
// Dentro de () vão ficar os parâmetros !
// Ex de arguento: 44, raquel, 70
//function somarDoisValores(primeirovalor, segundoValor){
    //Retorna a soma dos dois valores
   // return primeiroValor + segundoValor;
//}

// Trecho de código que executa a função, passando dois argumentos(44,70)
//somarDoisValores(44, 70);
// A função faz aquilo que tem responsabilidade de fazer, quando um sistema tem muitas 
// linhas ajuda muito(Ex: mais de 1 milhão de linhas), é como se fosse um garçom
// você pede um item do cardápio e ele se vira para fazer aquilo, pouco importa
// como ele vai fazer você quer apenas o item pedido retornado para você.

// Atividade: Crie uma função que Calcule o IMC de uma pessoa.

//function calcularIMC(altura, peso){
   // return peso / (altura * altura);
//}

//console.log(calcularIMC(1.75,80));

// Atividade 2: Crie uma função que 
// calcule O Imposto de Renda(Será necessário o uso de condicionais(IF/ELSE IF/ELSE))
// obs: Lembre de comentar os códigos anteriores
// para não atrapalha a execução(ctrl + ; para comentar trechos de código)

function calcularImpostoDeRenda(salarioMensal){
    // porcentagem: 0%, 7,5%, 15%, 22,5%, 27,5%
    // 0% -> até 2259,20
    // 7,5% -> 2259,21 até 2826,65
    // 15% -> 2826,66 até 3751,05
    //22,5% -> 3751,06 até 4664,69
    //27,5% -> Maior que 4664,69
    if(salarioMensal <= 2259.20){
        console.log("Você vai pagar 0% de imposto de renda!");
    }
    else if(salarioMensal >= 2259.21 && salarioMensal <= 2826.65){
        console.log("Você vai pagar 7,5% de imposto de renda!");
    }
    else if(salarioMensal >= 2826.66 && salarioMensal <= 3751.05){ 
        console.log("Você vai pagar 15% de imposto de renda!");
    }
    else if(salarioMensal >= 3751.06 && salarioMensal <= 4664.68){ 
        console.log("Você vai pagar 22,5% de imposto de renda!");
    }
    else {
        console.log("Você vai pagar 27,5% de imposto de renda!");
    }
}

calcularImpostoDeRenda(10000)
