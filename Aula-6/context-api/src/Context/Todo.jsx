import { createContext, useState } from "react";


const TodoContext = createContext({});

const TodoProvider = ({children}) => {

    const [produtos,setProdutos] = useState([
        {id: 1, nome:'Estudar Node', realizado: false},
        {id: 2, nome:'Estudar React', realizado: false}
    ])

    const handleClick = () => { 
        setProdutos([...produtos, {id: 4, nome:'Teste', realizado:false}])
      }

    return (
        <TodoContext.Provider value={{produtos, handleClick}}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext,TodoProvider}