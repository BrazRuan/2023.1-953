import { useState } from "react";
import Avo from "./components/Avo";

const App = function() {

    const [saque,_] = useState(1000)

    return (
  <>
    <div>
      <Avo nome={"Thomas"} sobrenome={"Sankara"} dinheiro={saque}></Avo>
    </div>

  </>
  )
}

export default App;