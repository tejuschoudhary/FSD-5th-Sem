import React from 'react'

function StateHandling() {
    const[count,setCount]=useState(100);
    const[red,setRed]=useState(255);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0)

    function increment(){
        setCount(count+20)
    }
    function decrement(){
        setCount(count-10)
    }
  return (
    <div>StateHandling</div>
    <h2>{count}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>ecrement</button>

     turn(
       

  )
}

export default StateHandling
