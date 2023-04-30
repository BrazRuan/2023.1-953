// // ES6
// // Desestruturação
// // Template Litterals 
// // Arrow Function
// // Métodos de Arrays
// // Typescript
// // Generics

// // let nome = "Ruan";
// // let idade = 24;


// /******************* ES ***************************/

// // criação de objeto chamado 'pessoa'

// let pessoa = {
//     nome: "Ruan",
//     idade: 24,
//     sobrenome: "Braz de Araujo"
//     //É possível criar um objeto dentro de outro objeto
// }

// //console.log(pessoa)
// //imprime na tela tudo contido no objeto pessoa

// // métodos javascript com objetos

// // variável emal recebe o primeiro caracterer da substring "Nome" e o último sobrenome, e transforma tudo em minúsculo.
// //let email = pessoa.nome.substring(0,1).toLowerCase() + pessoa.sobrenome.split(" ")[2].toLowerCase() +"@unicarioca.edu.br";
//  //O método split divide uma string a partir de um caractere, que no caso é o espaço


// //console.log(email);

// /******************* Desestruturação ***************************/

    // //nessa declaração, atribui numa variável os atributos pertencentes ao objeto declarado, podendo ser acessado como uma variável simples.
    // let {nome, sobrenome} = pessoa;
    // console.log(nome, sobrenome);

    // //Outras estruturas também podem ser desestruturadas, como arrays

    // let arr = ['banana', 'maçã', 'uva', 'pera'];
    // let [first, second, /*pode-se utilizar o spread operetor para armazenar todos os itens restantes de um array*/...outros] = arr;
    // //no caso, o atributo ...outros armazena todas as outras strings do array
// console.log(outros)


/******************* Arrow Function ***************************/

//Função padrão:
    // function teste(){
    //     return 'ola'
    // }

    // console.log(teste());

    // no Javascript existe a função protype que serve para o encadeamento de objetos
    //Também existe um objeto global, chamado de 'this'
    //this.nome = "Ruan";
    //Porém, após a versão ES5, o This quando é declarado dentro do escopo de uma função, ele retorna o valor atribuindo ao objeto dentro da função e desconsidera o valor fora

    //porém, pode-se usar um conceito chamado bind() para criar uma associação e conseguir utilizar o this de fora de uma função nos ES anteriores
    // function teste(){
    //     console.log(this);
    //     return 'ola';
    // }
    // console.log(teste.bind(this)());

    //Atualmente pode-se escrever através de uma arrow function
    // let teste = () => {  //sintaxe
    //     console.log(this);
    //     return 'ola';
    // } 

// console.log(teste())


/******************* MAP ***************************/

    //O método map serve para renderizar informações
    alunos = [{ //Array [] de objetos {}
        nome: 'Ruan',
        idade: 24,
        filhos: false,
    },{
        nome: 'Peny',
        idade: 23,
        filhos: false,
    },{
        nome: 'Miguel',
        idade: 22,
        filhos: true
    }];

    /*
    alunos_render = alunos.map((aluno) => { //função anônima
        return {
            nome: aluno.nome,
            idade: aluno.idade,
            filhos: aluno.filhos ? 'tem filhos' : 'não tem filhos'
        } 
    })//map() é um método de um array, uma função de arrays. Ele mapeia um array e retorna alterações.
    */
   //reproduzindo a função aciam diretamente com arrow funcion
   
    alunos_render = alunos.map((aluno) => ({...aluno,filhos: aluno.filho ? 'Tem filhos' : 'Não tem filhos' }))
    //console.log(alunos[1]); //a chamada acessa o array alunos, e o objeto na posição 1 (sendo array com as posições [0,1,2])

    console.log(alunos_render);
    

