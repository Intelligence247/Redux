import React from 'react'
import { useSelector } from 'react-redux'
const ChickenLabView = () => {
const numOfChickenLap = useSelector((state) => state.chickenLap.numOfChickenLap)
  return (
    <div>
      <h2>Number of chickenlaps {numOfChickenLap}</h2>
        <button>Order chickenlap</button>
        <button>Restock chickenlap</button>
    </div>
  )
}

export default ChickenLabView
