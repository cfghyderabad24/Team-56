// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, allowedRoles, ...rest }) => {
  const isAuthenticated = localStorage.getItem('role') !== null; // Example check for authentication
  const userRole = localStorage.getItem('role');

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(parseInt(userRole))) {
    return <Navigate to="/error" />;
  }

  return <Route {...rest} element={<Component />} />;
};

export default PrivateRoute;
