import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddProduct from './components/AddProduct.jsx';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';

// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/addProduct",
    element: <AddProduct></AddProduct>
  },
  {
    path: "/Login",
    element: <Login></Login>
  },
  {
    path: '/SignUp',
    element: <SignUp></SignUp>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
