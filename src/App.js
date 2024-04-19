import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import SignUp from './client/SignUp';
import Login from './client/Login';
import Forgot from './client/ForgotPassword'
import ResetPassword from './client/ResetPassword';
import OrderForm from './client/RestaurantHomePage/Order';
import ReservationForm from './client/RestaurantHomePage/Booking';
import MyOrders from './client/RestaurantHomePage/MyOrder';

function App() {
    return (
      <Router>
        <Routes> {/* Wrap Route components in Routes */}
          <Route path="/" element={<Login />} /> {/* Use the element prop */}
          <Route path="/Signup" element={<SignUp />} />
          <Route path = "/Login" element={<Login/>}/>
          <Route path = "/Forgot" element = {<Forgot/>}/>
          <Route path = "/Reset" element = {<ResetPassword/>}/>
          <Route path = "/Order" element = {<OrderForm/>}/>
          <Route path = "/Booking" element = {<ReservationForm/>}/>
          <Route path = "/myorder" element = {<MyOrders/>}/>
        </Routes>
      </Router>
    );
  }

export default App;
