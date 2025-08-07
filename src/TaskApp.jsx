import React, { useState, useReducer } from 'react'

function reducer(state, action) {
  switch(action.type){
    case 'increment':
      return {count : state.count +1};
    case 'decrement':
      return {count : state.count -1};
    default:
      throw new Error();
  }
}

export default function TaskApp() {

  const [state, dispatch] = useReducer(reducer, {count: 0});
  //const [count, setCount] = useState(0);

  // function changeCount(amount){
  //   setCount(current =>{
  //     return current + amount;
  //   })
  // }

  return (
    <div>
      <h1>this is a counter</h1>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <p>{state.count}</p>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  )
}
