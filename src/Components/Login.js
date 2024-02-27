import React from 'react'
import{ useState } from 'react';

export default function Login() {



    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleLogin = () => {
      
      console.log('Username:', username);
      console.log('Password:', password);
    };



  return (
    <div className="app-container ">
       
      <div className="login-form border border-info border-3 p-5 rounded bg-success w-50">
      <h2 className='text-center'> Login</h2>
      <br></br>
        <div>
        <input 
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        </div>
       <br>
       </br>
        
        <div>
        <input 
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        </div>
        <br>
        </br>

        <div >
        <button onClick={handleLogin}  className=' rounded'>Login</button>
        </div>
      </div>
    </div>
    
  )
}
