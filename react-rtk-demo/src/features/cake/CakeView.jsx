import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './CakeSlice'
const CakeView = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes {numOfCakes}</h2>
        <button onClick={()=> dispatch(ordered())}>Order cake</button>
        <button onClick={() => dispatch(restocked(2))}>Restock cake</button>
    </div>
  )
}

export default CakeView
