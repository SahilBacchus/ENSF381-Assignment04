import './styles.css';
import {Link} from 'react-router-dom';
import logoImage from "./logo.jpg";


function Header() {
    return (
      <div className="AppHeader">
        <header>
            <img src={logoImage} alt="LMS Logo" style={{width: '100px', height: '100px'}}/>
            <h1>LMS - Learning Management System</h1>
        </header>
        <div>
          <nav>
               <Link to="/home">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/login">Login</Link>
          </nav>
        </div>
      </div>
    );
  }
  
  export default Header;
