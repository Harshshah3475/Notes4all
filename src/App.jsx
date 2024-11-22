import { useState } from 'react'
import './App.css'
import Home from './components/home'
import Navbar from './components/navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EngNotes from './components/engNotes'
import HumNotes from './components/humNotes'
import Footer from './components/footer'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/engineering",
      element: <><Navbar /><EngNotes /></>
    },
    {
      path: "/humanities",
      element: <><Navbar /><HumNotes /></>
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>


  )
}

export default App
