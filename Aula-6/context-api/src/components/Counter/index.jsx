import { TodoContext } from '../../Context/Todo';
import './style.css'
import { useContext } from 'react';

const Counter = () => {

    const {produtos} =  useContext(TodoContext)

    return( 
        <div className={'containerCounter'}> 5 </div>
    )
}

export default Counter;