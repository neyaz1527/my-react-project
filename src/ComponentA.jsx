import React,{ useState, createContext } from "react";
import ComponentB from "./ComponentB.jsx";

export const Usercontext = createContext();

function ComponentA() {

    const [user, setUser] = useState("legend")

    return ( <div className="box">
        <h1>Component A</h1>
        <h2>{`hello ${user}`}</h2>
            <Usercontext.Provider value={user}>
                <ComponentB user={user}/>
            </Usercontext.Provider>
        
    </div> );
}

export default ComponentA;