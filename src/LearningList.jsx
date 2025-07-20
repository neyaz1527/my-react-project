import React, {useState} from 'react';

function List() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        setCount(count-1);
    }
    const reset = () => {
        setCount(0);
    }

    return ( 
        <div className='counterSection'>
            <p>count: {count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
     );
}

export default List;