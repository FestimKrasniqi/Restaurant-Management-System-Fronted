import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import SignUp from './client/SignUp';
import Login from './client/Login';
import Forgot from './client/ForgotPassword'
import ResetPassword from './client/ResetPassword';

function App() {
    return (
      <Router>
        <Routes> {/* Wrap Route components in Routes */}
          <Route path="/" element={<Login />} /> {/* Use the element prop */}
          <Route path="/Signup" element={<SignUp />} />
          <Route path = "/Login" element={<Login/>}/>
          <Route path = "/Forgot" element = {<Forgot/>}/>
          <Route path = "/Reset" element = {<ResetPassword/>}/>
        </Routes>
      </Router>
    );
  }

export default App;
