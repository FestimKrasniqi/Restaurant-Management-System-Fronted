import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './Authenticate';

function PrivateRoute() {
  const { isAuthenticated, loading } = useAuth();

  console.log("PrivateRoute: isAuthenticated =", isAuthenticated);
  console.log("PrivateRoute: loading =", loading);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
