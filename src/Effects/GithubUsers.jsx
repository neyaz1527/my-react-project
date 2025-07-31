import React, {useState, useEffect} from "react";
import './UserEffect.css'

function GithubUsers() {

    const [users, setUsers] = useState([]);

    async function fetchUsers(){
        try{
            const response = await fetch('https://api.github.com/users')
            const result = await response.json();
            setUsers(result);
        }
        catch(error) {}
    }

    fetchUsers();
    return (
        <div className="users">
            <h1>Github users</h1>
            <ul>
                {users.map((user) =>{
                    const { id, avatar_url, login, html_url} = users;

                    return(
                        <li key={id}>
                            <img src={avatar_url} alt={login}/>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default GithubUsers;