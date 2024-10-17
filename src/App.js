import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homePage';
import './config/themes/theme.css'
import ContactUs from './pages/contactUs';
import { Route, Router, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
  ]);

  return (

    <div className="App">
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
