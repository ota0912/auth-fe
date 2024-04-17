import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import Login from './components/login';
import Signup from './components/signup';
import Otp from './components/otp';
import Welcome from './components/welcome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signup" />
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/otp",
    element: <Otp/>
  },
  {
    path: "/welcome",
    element: <Welcome/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
