import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import ErrorPage from './pages/notFound.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <LoginPage/>,
    errorElement: <ErrorPage/> 
  },
  {
    path:"/register",
    element: <RegisterPage/> 
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
