import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Blank from './Components/Blank';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Registration />} /> {/* Default route */}
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blank" element={<Blank />} />
      </Routes>
    </Router>
  );
}

export default App;