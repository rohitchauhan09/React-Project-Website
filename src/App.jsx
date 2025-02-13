import React from 'react'
import Home from './Components/Home/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Shop from './Components/Shop/Shop'
import Product from './Components/Product/Product'
import Contact from './Components/Contact/Contact'
import Blog from './Components/Blog/Blog'
import '@fontsource/poppins';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './Components/Error'
import About from './Components/About/About'
import Media from './Components/Home/Media'
import Cart from './Components/Cart'
import Slider from './Components/Home/Slider'
import { useState } from 'react'


const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1)
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Header count={count} />
        <Home onclick={handleClick} />
        <Footer/>
      </>
    },
    {
      path: "/shop",
      element: <>
        <Header />
        <Shop />
        <Media/>
        <Footer/>
        
      </>
    }, {
      
        path: "/product",
        element: <>
          <Header />
          <Product />
        <Footer/>
          
        </>
      },{
      
        path: "/contact",
        element: <>
          <Header />
          <Contact />
         <Footer/>
        </>
      },{
        path: "/blog",
        element: <>
          <Header />
          <Blog/>
         <Footer/>
        </>
    }, {
      path: "/about",
      element: <>
        <Header/>
        <About/>
        <Footer/>
      </>
    }, {
      path: "/cart",
      element: <>
        <Header/>
        <Cart/>
        {/* <Footer/> */}
      </>
    }
    , {
      path: "*",
      element:<Error/>
      }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App