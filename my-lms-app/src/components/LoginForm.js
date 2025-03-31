import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import {useNavigate } from 'react-router-dom';
import AuthMessage from './AuthMessage';

export const ThemeContext = createContext(null);

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [result, setResult] = useState({success: '', msg: ''});
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
      }, []);

      useEffect(() => {
        setTimeout(function() {
            navigate("/home");
        }, 2000);
      }, [result, navigate]);
    
    async function fetchData() {
        console.log("Fetching data");
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        setData(data);
        console.log("Fetched data");
    }

    async function validateCreds() {
        let resultBox = document.getElementById("login_result");
        let success  = false;
        
        if (!password || !username) {
            setStatus({
              type: "error",
              message: "Password and username cannot be empty",
            });
            return false;
          }

        if (password.length < 8) {
            setStatus({
              type: "error",
              message: "Password must be at least 8 characters long",
            });
            return false;
          }

          for (let i = 0; i < data.length; i++) {
            let user = data[i];
            if (username == user.username && password == user.email) {
                console.log("Success");
                setResult({success: 'success', msg: 'Login successful'});

                //resultBox.style = "border: 2px solid black";
                //resultBox.innerHTML = "Login successful! Redirecting...";
            }
        }
          
        if (!success) {
            setResult({success: 'error', msg: 'Login failed, please try again'});
            //console.log("Falied");
            //resultBox.style = "border: 2px solid black";
            //document.getElementById("login_result").innerHTML = "Invalid username or password!";
        }
    }
    return (
        <div className="LoginForm">
            <h2>LMS Login</h2>
            <div class="form">
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button onClick={validateCreds}>Login</button>
            <br/><br/>
            <a href="#">Forgot Password?</a>
            <br/>
            <a href="signup.html">Don't have an account? Sign Up</a> <br/>
            <div id="login_result">

            </div>
            <ThemeContext.Provider value={{username, password}}>
                <AuthMessage />
            </ThemeContext.Provider>
        </div>
        
    );
}
  
export default LoginForm;