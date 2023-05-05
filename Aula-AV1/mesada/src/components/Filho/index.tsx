import { useState } from "react"

export default function Filho({dinheiro, handleCarteira}){

    const [desejo,_] = useState(100);
    const [mesada, setMesada] = useState(0);

    function pegarMesada(valor){
        
        if(handleCarteira(valor)){
            setMesada(mesada + valor); 
        }
    }

    return (
        <>
            <div onClick={() => {pegarMesada(desejo)}}>Pedir mesada</div>
            <div>Sou o Filho e ganhei {mesada} de mesada este mês</div>
        </>
    )
}

//O componenente filho consegue receber mensagem dos valores acima, como Pai e Avo, porém a informação da solicitação não volta;
