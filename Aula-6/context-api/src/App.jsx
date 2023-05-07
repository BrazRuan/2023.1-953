import './App.css'
import Todo from './components/Todo' //Importando a função
import Counter from './components/Counter'
import { useState } from 'react'

function App() {

  return(
    <div>
      <h1>Contexto</h1>
      <Todo/>
      <Counter/>
    </div>
  )

}

export default App
