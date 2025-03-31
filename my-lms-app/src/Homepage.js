import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function Homepage() {
    return (
      <div className="Homepage">
        <Header />
        <MainSection />
        <Footer />
      </div>
    );
  }
  
  export default Homepage;
