import React, {useState} from 'react';

function MyComponent() {

    const [name, setName] =useState();
    const [address, setAddress] =useState();

    function handleName(event){
        setName(event.target.value)
    }
    function handleAddress(event){
        setAddress(event.target.value)
    }

    return ( 
        <div>
            <input value={name} onChange={handleName}></input>
            <p>name: {name}</p>
            <textarea value={address} onChange={handleAddress}></textarea>
            <p>your address:{address}</p>
        </div>
     );
}

export default MyComponent;