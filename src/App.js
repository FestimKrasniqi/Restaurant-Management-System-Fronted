import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './client/SignUp';
import Login from './client/Login';
import Forgot from './client/ForgotPassword';
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
import MenuAdmin from './client/Admin/MenuAdmin';
import MenuFormAdmin from './client/Admin/MenuFormAdmin';
import StaffForm from './client/Admin/StaffFormAdmin';
import StaffAdmin from './client/Admin/StaffAdmin';
import TableAdmin from './client/Admin/TableAdmin';
import TableForm from './client/Admin/TableFormAdmin';
import Dashboard from './client/Admin/Dashboard';
import UserAdmin from './client/Admin/UserTrackAdmin';
import EditMenuForm from './client/Admin/EditMenuForm';
import EditStaffForm from './client/Admin/EditStaffFrom';
import EditTableForm from './client/Admin/EditTableForm';
import FeedbackPage from './client/RestaurantHomePage/Feedback';
import ReviewAdmin from './client/Admin/ReviewTrackAdmin';
import SupplierAdmin from './client/Admin/SupplierAdmin';
import SupplierForm from './client/Admin/SupplierFormAdmin';
import EditSupplierForm from './client/Admin/EditSupplierForm';
import EditOrderForm from './client/RestaurantHomePage/EditOrder';
import EditBookingForm from './client/RestaurantHomePage/EditBooking';
import { AuthContext } from './client/Authenticate';

function App() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Forgot" element={<Forgot />} />
        <Route path="/Reset" element={<ResetPassword />} />
        {loggedIn ? (
          <>
         
          </>
        ) : (
          <Route path="*" element={<Navigate to="/Login" />} />
        )}

<Route path="/Order" element={<OrderForm />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Booking" element={<ReservationForm />} />
        <Route path="/myorder" element={<MyOrders />} />
        <Route path="/myreservation" element={<MyReservation />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/home" element={<Home />} />
        <Route path="/orderadmin" element={<OrderAdmin />} />
        <Route path="/bookingadmin" element={<BookingAdmin />} />
        <Route path="/menuadmin" element={<MenuAdmin />} />
        <Route path="/menuformadmin" element={<MenuFormAdmin />} />
        <Route path="/staffformadmin" element={<StaffForm />} />
        <Route path="/staffadmin" element={<StaffAdmin />} />
        <Route path="/tableadmin" element={<TableAdmin />} />
        <Route path="/tableformadmin" element={<TableForm />} />
        <Route path="/useradmin" element={<UserAdmin />} />
        <Route path="/editMenu/:id" element={<EditMenuForm />} />
        <Route path="/editStaff/:id" element={<EditStaffForm />} />
        <Route path="/editTable/:id" element={<EditTableForm />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/reviewadmin" element={<ReviewAdmin />} />
        <Route path="/supplieradmin" element={<SupplierAdmin />} />
        <Route path="/supplierformadmin" element={<SupplierForm />} />
        <Route path="/editSupplier/:id" element={<EditSupplierForm />} />
        <Route path="/editOrder/:id" element={<EditOrderForm />} />
        <Route path = "/editBooking/:id" element={<EditBookingForm/>}/>
            
        
      </Routes>
    </Router>
  );
}

export default App;
