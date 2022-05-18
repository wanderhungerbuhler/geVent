import React, { Routes, Route, Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks/authContext';

import { SignIn } from '../pages/SignIn';
import { Dashboard } from '../pages/Dashboard';
import { Cart } from '../pages/Dashboard/Cart';

const PrivateRoute = ({ children, redirectTo }: any) => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to={redirectTo} />
}

export function Router() {
  return (
    <Routes>
      <Route element={<PrivateRoute redirectTo="/"><Dashboard /></PrivateRoute>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tickets" element={<Dashboard />} />
        <Route path="/wishlist" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />}>
          <Route path=":id" />
        </Route>
      </Route>
      <Route path="/*" element={<SignIn />} />
    </Routes>
  )
}
