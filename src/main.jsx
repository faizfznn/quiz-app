import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import LoginPage from './pages/Login.jsx'; 
import RegisterPage from './pages/Register.jsx';
import ErrorPage from './pages/notFound.jsx';
import HomePage from './pages/HomePage.jsx';
import QuizRulesPage from './pages/QuizRules.jsx';
import QuizPage from './pages/Quiz.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
    errorElement: <ErrorPage /> 
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage /> 
  },
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: "/quiz-rules",
    element: <QuizRulesPage />
  },
  {
    path: "/quiz",
    element: <QuizPage />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);