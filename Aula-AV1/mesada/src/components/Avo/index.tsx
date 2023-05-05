import { useState } from "react"
import Pai from "../Pai"

export default function Avo({nome, sobrenome, dinheiro}){ //exporta a função avo, passando os dois parâmetros de objeto

    const [aposentadoria,setAposentadoria] = useState(dinheiro);

    function handleCarteira(valor){ //recebe o valor da aposentadoria e retira segundo a variável 'valor'
        if(valor <= aposentadoria){
            setAposentadoria(aposentadoria - valor)
            return true
        }
    }

    return( 
        <> 
            <h1>Avo {nome} {sobrenome} tem {aposentadoria} reais!</h1>
            <Pai dinheiro={aposentadoria} handleCarteira={handleCarteira}></Pai>
        </>
        //A função acima, ao clicar no template Avo, ao qual é atribuido um nome e sobrenome, acrescenta em 1 o número, contando os cliques
    )
}