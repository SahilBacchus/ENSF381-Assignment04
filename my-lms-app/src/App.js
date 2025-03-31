import './App.css';
import Homepage from './Homepage';
import Login from './Login';
import CoursePage from './CoursePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/home" element={<Homepage/>} />
          <Route path="/courses" element={<CoursePage/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
