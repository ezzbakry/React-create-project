import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Footer from './components/Footer/Footer'
import Header from './components/Navbar/Navbar'
// import Users from './components/Users/Users'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Usersfunctional from './components/Users/Usersfunctional'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './pages/Aboutus/Aboutus'
// import Login from'./pages/Form/Login'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Notfound from './pages/Notfound/Not'
import Values from './pages/Aboutus/Values/Values'
import Vision from './pages/Aboutus/Vision/Vision'
import Productdetails from './pages/Products/Productdetails'
import Products from './pages/Products/Products'
import { Provider, useSelector } from 'react-redux'
import store from './Store/store'
import AppLayout from './Applayout'



function App() {
  // const [count, setCount] = useState(0)
  // const lang = useSelector((lang) => lang.language.language)
  // console.log(lang)
  const routes = createBrowserRouter([
    {
      path: "/", element: <AppLayout></AppLayout>, children: [
        { index: true, element: <Home /> },
        {
          path: "about", element: <About />, children: [
            { index: true, element: <Values></Values> },
            { path: "vision", element: <Vision></Vision> },
          ]
        },
        { path: "contact", element: <Contact /> },
        { path: "products", element: <Products /> },
        { path: "productDetails/:id", element: <Productdetails /> }
      ],
    },
    { path: "*", element: <Notfound /> }, ,
  ]);


  return (
    <>

      <Provider store={store}>
          <RouterProvider router={routes}></RouterProvider>
      </Provider>


    </>
  )



}

export default App
