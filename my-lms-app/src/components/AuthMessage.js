import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './LoginForm';

function AuthMessage() {
    const { credentials } = useContext(ThemeContext);
    return (
        <div className="AuthMessage">
            
        </div>
    );
  }
  
  export default AuthMessage;
