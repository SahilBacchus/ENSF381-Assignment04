import AppHeader from './components/AppHeader';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';

function Login() {
    return (
      <div className="Login">
        <AppHeader />
        <LoginForm />
        <Footer />
      </div>
    );
}
  
  export default Login;