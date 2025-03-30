import AppHeader from './components/AppHeader';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function Homepage() {
    return (
      <div className="Homepage">
        <AppHeader />
        <MainSection />
        <Footer />
      </div>
    );
  }
  
  export default Homepage;
