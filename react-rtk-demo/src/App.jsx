import { useState } from 'react'
import CakeView from './features/cake/CakeView'
import IceCreamView from './features/icecream/IceCreamView'
import Userview from './features/users/Userview'
import ChickenLabView from './features/chickenLap/ChickenLabView'

function App() {

  return (
<div className="body">
    <CakeView/>
    <IceCreamView/>
    <Userview/>
    {/* <ChickenLabView/> */}
</div>    
  )
}

export default App
