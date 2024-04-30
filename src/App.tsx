import { ErrorElement } from './components';
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { loader as landingLoader } from './pages/Landing/Landing';

const router = createBrowserRouter([
  {
    path: '/comfy/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
      },
      { path: 'cart', element: <Cart />, errorElement: <ErrorElement /> },
      { path: 'about', element: <About />, errorElement: <ErrorElement /> },
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <ErrorElement />,
      },
      { path: 'orders', element: <Orders />, errorElement: <ErrorElement /> },
    ],
  },
  { path: '/comfy/login', element: <Login />, errorElement: <Error /> },
  { path: '/comfy/register', element: <Register />, errorElement: <Error /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
