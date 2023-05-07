import { useContext, useState } from 'react'
import './style.css'
import { TodoContext } from '../../Context/Todo'

//a função está recebendo como parâmetros os objetos produtos e handleClick
export default function Todo(){ //exportando a função

    const {produtos,handleClick} = useContext(TodoContext)

    return(
        <>
            <div className={'containerTodo'}>
                <div onClick={handleClick}>To-Do</div>
                {produtos.map(produto => <p key={produto.id}>{produto.nome}</p>)}
            </div>
        </>
    )
}
