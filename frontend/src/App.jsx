import { useState } from 'react'
import Login from "./components/Login";
import Signup from './components/signup';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>

  );
}


export default App;
