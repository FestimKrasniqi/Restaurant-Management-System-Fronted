import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import SignUp from './client/SignUp';
import Login from './client/Login';
import Forgot from './client/ForgotPassword'
import ResetPassword from './client/ResetPassword';
import OrderForm from './client/RestaurantHomePage/Order';
import ReservationForm from './client/RestaurantHomePage/Booking';
import MyOrders from './client/RestaurantHomePage/MyOrder';
import MyReservation from './client/RestaurantHomePage/MyReservation';
import About from './client/RestaurantHomePage/About';
import Menu from './client/RestaurantHomePage/Menu';
import Home from './client/RestaurantHomePage/Home';
import OrderAdmin from './client/Admin/OrderAdmin';
import BookingAdmin from './client/Admin/BookingAdmin';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/Signup" element={<SignUp />} />
          <Route path = "/Login" element={<Login/>}/>
          <Route path = "/Forgot" element = {<Forgot/>}/>
          <Route path = "/Reset" element = {<ResetPassword/>}/>
          <Route path = "/Order" element = {<OrderForm/>}/>
          <Route path = "/Booking" element = {<ReservationForm/>}/>
          <Route path = "/myorder" element = {<MyOrders/>}/>
          <Route path = "/myreservation" element={<MyReservation/>}/>
          <Route path = "/about" element={<About/>}/>
          <Route path = "/menu" element ={<Menu/>}/>
          <Route path = "/home" element ={<Home/>}/>
          <Route path = "/orderadmin" element={<OrderAdmin/>}/>
          <Route path = "/bookingadmin" element={<BookingAdmin/>}/>
        </Routes>
      </Router>
    );
  }

export default App;
