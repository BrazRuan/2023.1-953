/* -------------------------------------- Typescript ------------------------------------*/
//Tipagem, interface, type, generics

//A notagem do typescript não pode ser interpretada diretamente pelo compilador, tendo que ser transporto ao javascript

    // let nome : string = "Ruan";
    // console.log(nome);

//para corrigir esse problema, deve-se utilziar o compilador do TS para JS
// - tsc <nome do arquivo> - cria um arquivo js compilando o ts
// - tsc <nome do arquivo> --outDir ./dist - Cria uma pastar para distribuir o código e não embolar com o TS
// - tsc <nome do arquivo> --outDir ./dist && node ./dist/<nome do arquivo>.js // Para mandar o código para a distribuição e executar

    // let sobrenome : string = "Braz de Araujo";
    // console.log(sobrenome);

/* -------------- Tipagem ------------------*/

// A tipagem serve para atribuir tipos às variáveis, mas não necessáriamente somente tipos primitivos, podendo torna-los mais complexos

//A interface serve para atribuir o tipo para variáveis na qual será atribuido os dados de um objeto

    // interface Pessoa {
    //     nome: string,
    //     idade: number,
    //     cpf: string,
    //     sexo: 'M' | 'F',
    // }



    // let aluno : Pessoa = { //A interface pode ser atribuida como um tipo a ser seguido
    //     nome: "Ruan",
    //     idade: 23,
    //     cpf: '11111111111',
    //     sexo: "M",
    // }

    // console.log(aluno);

// ------------------ Extends  - Estender um objeto
// o extends serve para estender os atributos de um objeto para outro, evitando a repetição desnecessária do código

//    interface Endereco{
//     cidade: string,
//     bairro: string,
//     rua: string,
//     complemento?: string, //a interregoção sinaliza como opcional o atributo
//    }

//     interface Pessoa {
//         nome: string,
//         idade: number,
//         cpf: string,
//         sexo: 'M' | 'F',
//         endereco: Endereco //o tipo complexo recebe uma interface como tipo
//     }

//     interface Aluno extends Pessoa {
//         matricula : string //a interface aluno recebe os atributos de Pessoa e adiciona o atributo 'matrícula'
//     }

//     let aluno : Aluno = {
//         nome: 'Ruan',
//         idade: 23,
//         cpf: '11111111111',
//         sexo: 'M',
//         matricula: '2019101232',
//         endereco: {
//             cidade: 'Rio de Janeiro',
//             bairro: 'Benfica',
//             rua: 'Rua das alamedas',
//             complemento: 'travessa S, nº 521'
//         }
//     }

// Pode-se utilizar também o 'type' para criação de tipos como a interFace, porém é normalmente utilizado para tipos mais simples
//Exemplo
    // type impostoUm ={
    //     percentual : number
    // }

    // console.log(aluno);
//a principal diferença entre interface e type é o fato de a interface ser 'aberta', ou seja, ela pode ser redefinida a qualquer momento do código

// ------------------------ Generics

    // function ordenaNumeros (estrutura:number[]) :number[] { //funcão criada, onde a entrada será um array de numeros, e a saída, obrigatóriamente também será.
    //     return estrutura.sort() //o método .sort ele ordena os números em ordem crescente
    // }

    // console.log(ordenaNumeros([50,12,23,15,87,69]))

    // function ordenaPalavras (struct: string[]) : string[] {
    //     return struct.sort()
    //     }
    // console.log(ordenaPalavras(['banana','maçã','amora','tomate','caqui']));
    // Acima, a programado uma função tipada
    // A função genérica é formada para que atenda de forma genérica as demais possibilidades <>


    function ordena<T> (estrutura: T[]) : T[] {
        return estrutura.sort()
    }

    console.log(ordena([50,24,23,65,12,98]));
    console.log(ordena(['uva','banana','pera','maçã']))