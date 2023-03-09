import { useState } from 'react'
import './App.css'
import Card from './assets/components/Card'

function App() {
 
  const [x] = useState(['1','2','3'])
  return (
    <div id="container">
      {x.map(i => <Card/>)}
    </div>


  )

}

export default App
