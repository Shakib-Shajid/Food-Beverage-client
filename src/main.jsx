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
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/addProduct')
  },

  {

    path: "addCoffee",
    element: <PrivateRoute><AddCoffee></AddCoffee></PrivateRoute>
  },


  // {
  // path:"/coffee" ,
  //   element:<CoffeeDetails></CoffeeDetails>,
  //   loader: () => fetch(`http://localhost:5000/addProduct`)
  //   // loader: ({ params }) => fetch(`http://localhost:5000/addProduct/${params.id}`)

  // },

  // {
  //  path:'coffee/:id',
  //   element: <CoffeeCard></CoffeeCard>,
  //   loader: ({ params }) => fetch(`http://localhost:5000/addProduct/${params.id}`)

  // },


  {
    path: 'coffee/:id',
    element: <PrivateRoute><CoffeeDetails></CoffeeDetails></PrivateRoute>,
    loader: ({ params }) => fetch(`http://localhost:5000/addProduct/${params.id}`)


  },

  {
    path: 'updateCoffee/:id',
    element: <UpdtaeCoffee></UpdtaeCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/addProduct/${params.id}`)

  },
  // {

  //   path: '/signup',
  //   element:<SignUp></SignUp>
  // },




  // {
  //   path:'/cart',
  //   element:<Cart></Cart>,
  //   loader: () => fetch('http://localhost:5000/addProduct')


  // },
  {
    path: '/login',
    element: <Login></Login>

  },
  {
    path: '/register',
    element: <Register></Register>

  },



  // {
  //   path:'/users',
  //   element:<Users></Users>,
  //   loader: () => fetch('http://localhost:5000/user')
  // },
  {
    path: '/signin',
    // element:<SignIn></SignIn>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>  <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
