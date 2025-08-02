import React, { useState, useEffect } from "react";
import "./UserEffect.css";

function GithubUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUsers() {
    try {
      const response = await fetch("https://api.github.com/users");
      const result = await response.json();
      setUsers(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() =>{
    setTimeout(() => {
      fetchUsers();
    }, 1000);
  }, []);

  if(loading){
    return <p>This is loading....</p>
  }
  if(!loading){
  return (
    <div className="users">
      <h1>Github users</h1>
      <ul>
        {users.map((user) => {
          const { id, avatar_url, login, html_url } = user;

          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <p>{login}</p>
              <a href={html_url} target="_blank" className="profile-btn">Profile</a>
            </li>
          );
        })}
      </ul>
    </div>
  );}
}

export default GithubUsers;
