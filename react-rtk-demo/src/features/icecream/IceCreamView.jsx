import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'
const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIcecreams = useSelector((state)=> state.icecream.numOfIcecreams)
  const dispatch = useDispatch()
  return (
    <div>
    <h2>Number of ice cream = {numOfIcecreams}</h2>
      <button onClick={()=> dispatch(ordered())}>Order ice cream</button>
      <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} placeholder='Number of Ice Cream to restock' />
      <button onClick={() => dispatch(restocked(value))}>Restock ice cream</button>
  </div>
  )
}

export default IceCreamView
