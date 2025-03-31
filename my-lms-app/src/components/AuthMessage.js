import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './LoginForm';
import DisplayStatus from './DisplayStatus';

function AuthMessage() {
    const { context } = useContext(ThemeContext);

    return (
        <div className="AuthMessage">
            <DisplayStatus type={result.success} msg={result.msg}/>
        </div>
    );
  }
  
  export default AuthMessage;
