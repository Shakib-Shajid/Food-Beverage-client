import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdtaeCoffee from './components/UpdtaeCoffee.jsx';
// import SignUp from './components/SignUp.jsx';
// import SignIn from './components/SignIn.jsx';
// import AuthProvider from './providers/AuthProvider.jsx';
// import Users from './components/Users.jsx';
import CoffeeDetails from './components/Navbar/CoffeeDetails.jsx';
// import Detail from './components/Detail.jsx';
// import CoffeeCard from './components/CoffeeCard.jsx';
// import Cart from './Cart.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import NotFound from './components/NotFound.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Mycart from './components/Mycart.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://food-beverage-server-c498yxb4r-shakib-shajid.vercel.app/addProduct')
  },

  {
    path: "addCoffee",
    element: <PrivateRoute><AddCoffee></AddCoffee></PrivateRoute>
  },
  {
    path: "mycart",
    element: <PrivateRoute><Mycart></Mycart></PrivateRoute>
  },

  {
    path: 'coffee/:id',
    element: <PrivateRoute><CoffeeDetails></CoffeeDetails></PrivateRoute>,
    loader: ({ params }) => fetch(`https://food-beverage-server-c498yxb4r-shakib-shajid.vercel.app/addProduct/${params.id}`)


  },

  {
    path: 'updateCoffee/:id',
    element: <UpdtaeCoffee></UpdtaeCoffee>,
    loader: ({ params }) => fetch(`https://food-beverage-server-c498yxb4r-shakib-shajid.vercel.app/addProduct/${params.id}`)

  },
  {
    path: '*',
    element: <NotFound></NotFound>
  },
  {
    path: '/login',
    element: <Login></Login>

  },
  {
    path: '/register',
    element: <Register></Register>

  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>  <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
