<<<<<<< HEAD
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
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:id', element: <SingleProduct /> },
      { path: 'cart', element: <Cart /> },
      { path: 'about', element: <About /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'orders', element: <Orders /> },
    ],
  },
  { path: '/comfy/login', element: <Login /> },
  { path: '/comfy/register', element: <Register /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
=======
import { Button } from '@/components/ui/button';
import { useAppSelector } from './hooks';

const App = () => {
  // const name = useAppSelector((state) => state.userState.name)
  const { name } = useAppSelector((state) => state.userState);

  return (
    <div>
      <h1 className='text-7xl font-bold '>App</h1>
      <Button
        variant='destructive'
        size='lg'
        onClick={() => console.log('it worked!!!')}
      >
        Click Me
      </Button>
    </div>
  );
>>>>>>> e151fbe (setting up redux)
};

export default App;
