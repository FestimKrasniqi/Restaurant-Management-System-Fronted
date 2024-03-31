import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import SignUp from './client/SignUp';
import Login from './client/Login';

function App() {
    return (
      <Router>
        <Routes> {/* Wrap Route components in Routes */}
          <Route path="/" element={<Login />} /> {/* Use the element prop */}
          <Route path="/Signup" element={<SignUp />} />
          <Route path = "/Login" element={<Login/>}/>
        </Routes>
      </Router>
    );
  }

export default App;
