import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import './App.css'
import NotFoundPage from './pages/404Paga'
import About from './pages/About'
import BlogDetails from './pages/Blog-Details'
import BloogerProfile from './pages/BloogerProfile'
import Contact from './pages/Contact'
import Home from './pages/Home'
import MyBlog from './pages/MyBlog'
import Registration from './pages/Registration'


function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/my-blog",
      element: <BloogerProfile/>
    },
    {
      path: "/contact-us",
      element: <Contact />
    },
    {
      path: "/login",
      element: <Registration />
    },
    {
      path: "/blog-details",
      element: <BlogDetails/>
    },
    {
      path: "*",
      element: <NotFoundPage />
    }
  ])



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
