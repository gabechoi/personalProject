import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import axios from "axios";

function App() {

  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleAddUser(e){
    e.preventDefault()
    const newUser = {
      name: name.trim(),
      email: email.toLowerCase(),
      username: userName,
      password: password,
    };

    try{
      const response = await axios.post("http://localhost:8080/addUser", newUser);

      if(response.status === 200){
        console.log("Successfully added new user!")
      }
      else{
        console.log("Error adding new user");
      }
    } catch (error) {
      console.error("Error", error)
    }
  }


  return (
      <div style={{ maxWidth: 400, margin: "auto", padding: "1rem" }}>
        <h2>Add User</h2>
        <form onSubmit={handleAddUser}>
          <label>
            Name:
            <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
          </label>
          <br /><br />

          <label>
            Email:
            <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
          </label>
          <br /><br />

          <label>
            Password:
            <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
          </label>
          <br /><br />

          <button type="submit">Add User</button>
        </form>
      </div>

    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
