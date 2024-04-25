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

const router = createBrowserRouter([
  {
    path: '/comfy/',
    element: <Landing />,
  },
  {
    path: '/comfy/cart',
    element: <Cart />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
