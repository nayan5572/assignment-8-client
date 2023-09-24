import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import CategoryList from './components/CategoryList/CategoryList';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/donation',
        element: <Donation></Donation>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/category/:id',
        element: <CategoryList></CategoryList>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
