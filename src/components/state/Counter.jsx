import React, {useState} from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);

    function changeCount(amount){
        setCount(current =>{
           return current + amount;
        })
    }
    function resetButton(){
        setCount(0);
    }

  return (
    <div >
        <h1>Counter: {count}</h1>
        <button onClick={() => changeCount(+1)}>Increment</button>
        <button onClick={() => changeCount(-1)}>Decrement</button>
        <button onClick={() => resetButton()}>Reset</button>
    </div>
  )
}
