// // Update your App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Registration from './Components/Registration';
// import Login from './Components/Login';
// import Blank from './Components/Blank';
// import Dashboard from './Components/Dashboard';
// import Workplace from './Components/Workplace';
// import Profile from './Components/Profile';
// import Layout from './Components/Layout';

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/registration" element={<Registration />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/blank" element={<Blank />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/workplace" element={<Workplace />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/" element={<Navigate to="/login" />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;








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
        <Route path="/" element={<Login />} /> {/* Default route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/blank" element={<Blank />} />
      </Routes>
    </Router>
  );
}

export default App;


