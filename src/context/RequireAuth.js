import React from 'react';
import { Navigate } from "react-router";
import { useAuth } from './authContext';

export default function RequireAuth({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate replace to="/login" />
  }

  return children
}
