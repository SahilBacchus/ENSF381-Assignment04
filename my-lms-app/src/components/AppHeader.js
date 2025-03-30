import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function AppHeader() {
    return (
      <div className="AppHeader">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>LMS Homepage</title>
            <link rel="stylesheet" type="text/css" href="styles.css"/>
        </head>
        <header>
            <img src="components/logo.jpg" alt="LMS Logo" style={{width: '100px', height: '100px'}}/>
            <h1>LMS - Learning Management System</h1>
        </header>
        <div>
          <nav>
              <a href="login.html">Login</a> 
              <a href="leaderboard.html">Leaderboard</a> 
              <a href="#about">About LMS</a>
          </nav>
        </div>
      </div>
    );
  }
  
  export default AppHeader;
