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
import ProductDetails from './components/ProductDetails/ProductDetails';
// import DonationDetails from './components/DonationDetails/DonationDetails';

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
        element: <Donation></Donation>,
        loader: () => fetch('/donate.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/category',
        element: <CategoryList></CategoryList>
      },
      {
        path: '/proDetails/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ()=> fetch('/donate.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
