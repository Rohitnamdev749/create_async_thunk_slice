import React from 'react'
import { incrementAmount } from '../redux/bonusSlice'
import { useDispatch, useSelector } from 'react-redux'

const Bonus = () => {
    const dispatch = useDispatch()
    const points = useSelector(state=>state.bonus.points)
  return (
    <div>
        <div>bonus: {points}</div>
        <button onClick={()=>dispatch(incrementAmount(points))}>add amount</button>
    </div>
  )
}

export default Bonus