
import './App.css';
import React, { useState } from 'react';

const App=()=> {
  const[users, setUser] = useState([]);

  const loadUsers = async()=>{
    console.log('before');
    const response= await fetch("https://api.github.com/users");

    const jsonResponse = await response.json();

    setUser(jsonResponse);
  }
  return (
    <div className="App">
      <h1>FETCH DATA </h1>
      <button onClick={loadUsers}>Get Data</button>

      <h2>Users:</h2>
      <ul>
        {users.map(({id, login, node_id})=>(
              <li key={id}>NAME  : {login}     NODE_ID : {node_id}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
