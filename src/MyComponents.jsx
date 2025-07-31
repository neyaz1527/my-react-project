import React, {useState,useEffect} from "react";

function MyComponents() {

    const [count, setCount] = useState(0);

    useEffect(() =>{
        console.log(count);
    }, [count]);

    function changeValue(amount){
        setCount(currentCount => {
            return currentCount + amount;
        })
        setCount(currentCount => {
            return currentCount + amount;
        })
        //console.log(count)
    }

    return (
        <div>
            <button onClick={() => {changeValue(-1)} }>--</button>
            <span>{count}</span>
            <button onClick={() => {changeValue(+1)} }>++</button>
        </div>
    );
}

export default MyComponents;