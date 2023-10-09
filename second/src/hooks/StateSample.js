import React, { useState } from 'react'

function StateSample() {
    const [counter, setCounter] = useState(0)

    function handleIncrement(){
        if(counter < 10){
            setCounter(counter + 1)
        }
    }

    const handleDecrement = () => {
        // if(counter === 0){
        //     return null
        // }else{
        //     setCounter(counter - 1)
        // }
        if(counter !== 0) setCounter(counter - 1)
    }


  return (
    <div className='counterStyle'>
        <h1>{counter}</h1>
        <button onClick={handleIncrement}>Arttır + 1</button>
        <button onClick={handleDecrement}>Azalt - 1</button>
    </div>
  )
}

export default StateSample