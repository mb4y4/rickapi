import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import About from './pages/About.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import CharDetails from './pages/CharDetails.jsx'


const paths = createBrowserRouter([
  {
    path: '/',
    element: <App/> 
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: 'contact',
    element: <Contact/>
  },
  {
    path: '/character/:id',
    element: <CharDetails/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {paths}/>
  </React.StrictMode>,
)
