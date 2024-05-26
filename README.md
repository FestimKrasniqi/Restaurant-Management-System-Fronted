# Restaurant Management System - Frontend

This is the frontend repository for the Restaurant Management System. It provides a user interface for customers and administrators to manage restaurant operations including orders, bookings, menu management, and more.This project is based on distributed systems course.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Authentication](#authentication)
- [Private Routes](#private-routes)
- [Contributors](#contributors)


## Technologies Used

- React
- React Router
- Fetch API
- Material-UI
- Formik & Yup
- JWT Authentication
- React MUI


## Installation



1. Install dependencies:
   ```sh
   npm install
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Project Structure

```
src/
|-- client/
| |-- Admin/
| |-- layouts/
| |-- img/
| |-- RestaurantHomePage/
| |-- Authenticate.js
| |-- ForgotPassword.js
| |-- Login.js
| |-- PrivateRoute.js
| |-- ResetPassword.js
| |-- SignUp.js
| |-- style.css
|-- App.js
|-- index.js
```

## API Integration

API integration is handled using the Fetch API.

Example of an API call:
```js

const API_URL = 'http://localhost:8000/api';

export const getOrders = async () => {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Failed to fetch orders');
  }
};
```

## Authentication

Authentication is managed using JWT tokens. The `AuthContext` provides authentication state and functions for login and logout.

```js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email, password) => {
    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
```

## Private Routes

Private routes ensure that only authenticated users can access certain parts of the application.

```js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PrivateRoute() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
```



## Contributors

- [Festim Krasniqi](https://github.com/FestimKrasniqi)
- [Dominik Pllashniku](https://github.com/pllasha)

