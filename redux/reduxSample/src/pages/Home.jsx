import React from 'react'
import { useDispatch } from 'react-redux'
import { arttir } from '../store/features/CartSlice'

function Home() {

    const dispatch = useDispatch()
    

    const handleCart = () => {
        dispatch(arttir())
    }
   
  return (
    <div>
        <button onClick={handleCart}>Arttır</button>
    </div>
  )
}

export default Home