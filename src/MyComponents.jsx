import React, {useRef,useState} from "react";

function MyComponents() {

   const emailRef = useRef()
   const passwordRef = useRef()

    function onSubmit(e){
        e.preventDefault()
        console.log({email: emailRef.current.value, password: passwordRef.current.value})
    }

    return (
        <form onSubmit={onSubmit}>
            <input ref={emailRef} type="email"></input><br/>
            <input ref={passwordRef} type="password"></input><br/>
            <button type="submit">submit</button>
        </form>
    );
}

export default MyComponents;