import './App.css';
import Homepage from './Homepage';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Homepage/>} />
          {/*<Route path="/courses" element={<div></div>} />*/}
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
