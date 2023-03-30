import React from 'react'
import { increment, decrement } from '../redux/reducer/demoreducer'
import { useDispatch, useSelector } from 'react-redux'

const ReducerDemo = () => {
    const dispatch = useDispatch()
    const count = useSelector(state=>state.reducerDemo.count)
  return (
    <div>
        <div><button onClick={()=>dispatch(increment())}>+</button></div>
        <div>{count}</div>
        <div><button onClick={()=>dispatch(decrement())}>-</button></div>
        <div>-----------------------</div>
        
    </div>
  )
}

export default ReducerDemo