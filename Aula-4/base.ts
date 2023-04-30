
// O Javascript é uma liguagem de tipagem fraca, podendo alterar o tipo da váriavel no momento da atribuição
// O Typescript é um 'superste', servindo como uma camada acima do Javascript, servindo para tipar os conceitos de classes, herança, interface
// no javascript de forma estática, não dinâmica, realizando os testes em tempo de desenvolvimento.


let nome = 'Ruan'; //ao colocar a variável recebendo um valor com aspas, o Typescript infere que a variável é uma string

let sobrenome : string = "Braz"; // Pode-se também atribuir o tipo da variável diretamente através de dois pontos :

function soma (a:number,b:number) :number //pode-se também, declarar o tipo do retorno da função
{
    return a+b;
}


