import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import Login from './Pages/Login';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Register from './Pages/Register';
import MainRoute from './Routes/MainRoute';
import { AuthProvider } from './Contexts/AuthContext';
import MyProducts from './Pages/MyProducts';
import MyCart from './Pages/MyCart';
import AddProduct from './Pages/AddProduct';
import Products from './Pages/Products';
import SingleBrand from './Pages/SingleBrand';
import ProductDetails from './Pages/ProductDetails';
import UpdateProduct from './Pages/UpdateProduct';
import PrivateRoute from './Routes/PrivateRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainRoute></MainRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch("https://electro-tech-backend.vercel.app/brands")
      },
      {
        path: 'brands/:name',
        element: <SingleBrand></SingleBrand>,
        loader: ({ params }) => fetch(`https://electro-tech-backend.vercel.app/${params.name}`),
      },
      {
        path: '/products',
        element: <Products></Products>,
      },
      {
        path: '/products/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://electro-tech-backend.vercel.app/${params.id}`),
      },
      {
        path: '/my-products',
        element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>,
      },
      {
        path: '/my-cart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
      },
      {
        path: '/add-product',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: 'update-product/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`https://electro-tech-backend.vercel.app/products/${params.id}`),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes}>
        <MainRoute></MainRoute>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
