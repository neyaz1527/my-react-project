import React,  { useState } from "react"

function MyComponent() {

    const [name, setName] = useState();
    function changeName(event){
        setName(event.target.value)
    }

    return ( <div>
        <input value={name} onChange={changeName}></input> 
        <p>name: {name}</p>
    </div> );
}

export default MyComponent;