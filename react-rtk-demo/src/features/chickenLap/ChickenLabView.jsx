import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './oneChickenLap'
const ChickenLabView = () => {
const numOfChickenLap = useSelector((state) => state.chickenlap.numOfChickenLap)
const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of chickenlaps {numOfChickenLap}</h2>
        <button onClick={()=> dispatch(ordered())}>Order chickenlap</button>
        <button onClick={() => dispatch(restocked(2))}>Restock chickenlap</button>
    </div>
  )
}

export default ChickenLabView
