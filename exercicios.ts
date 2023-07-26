// // Exercícios FOR

import promptSync from "prompt-sync";

const prompt = promptSync();

// 1. Imprimir números de 1 a 10 utilizando o loop for

export function exercicioUm():void {
    
    for (let contador:number = 0; contador <= 10; contador++) {
        console.log(contador);
    }
}




// // 2.Imprimir números pares de 1 a 10.

export function exercicioDois():void {
    
    for (let contador:number = 2; contador <= 10; contador +=2) {
        console.log(contador);
        
    }
}

// // 3. Faça um programa que imprima os números ímpares de 0 a 50;

export function exercicioTres():void {
    
    for (let contador:number = 1; contador < 50; contador +=2) {
        console.log(contador);
    }
}


// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

export function exercicioQuatro():void {
    
    let multiplicador:number = parseInt(prompt("Digite um número a ser multiplicado: "));
    for (let contador:number = 0; contador <= 10; contador++) {
        console.log(`${multiplicador*contador}`);
    }
    
}
// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.
// 0 1 1 2 3 5 8 13

export function exercicioCinco():void {

    //toda varivel precisar te um tipo
    
    let numAnterior:number=0;
    let numAtual:number= 1
    
    for (let contador:number = 0; contador < 10 ; contador++) {
        let proximoNumero = numAnterior + numAtual;
        
        
        console.log(proximoNumero);
        
        numAnterior = numAtual;
        numAtual = proximoNumero;
    }
        
    }
// 6. Imprimir números pares de 0 a 20 utilizando o loop while

export function exercicioSeis():void{

    let contador:number = 0
    while (contador <= 20) {
        console.log(contador);
        contador +=2
        
        }
    }

    
// 7. Calcular a soma dos números de 1 a 100 utilizando a estrutura
// // while.
// 1 +2 + 3 + 4 + 5 + 6...100
// 3 + 3
// 6 + 4
// 10 + 5
// 15 + 6 

export function exercicioSete():void {
    
    let contador:number =1
    let resultado:number= 0
    
    while (contador <=100){
        resultado = resultado + contador;
        contador++;    
    }
    console.log(resultado);
}

// // 8. Faça um programa que receba a idade do usuário, enquanto a
// // resposta do usuário for menor que 18 anos continue a solicitar a
// // idade e mostre uma mensagem quando a idade do usuário for
// // maior que 18.

// 

export function exercicioOito():void {
    
    
    let idade: number
    
    do{
        idade = parseInt(prompt("Digite a sua idade: "))
    }
    
    while (idade < 18) {
        console.log("Ok! Sua idade é maior que 18");}
    }

// // 9. Faça um programa que receba um número do usuário e mostre
// // no console a contagem regressiva até 0.
// const prompt = require('prompt-sync')()

export function exercicioNove():void {
    
    
    let numero:number= parseInt (prompt("Digite um número: "))
    
    while (numero >= 0) {
        console.log(numero);
        numero --;
        
    }
}
    

// 10. Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

export function exercicioDez():void {
    
    
 
    let numero:any;
    
    do {
        numero = prompt ("Digite um número: ")
        
    }while (numero != 0);
}