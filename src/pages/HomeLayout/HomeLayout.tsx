import { Outlet } from 'react-router-dom';
import { Header } from '../../components';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <nav>nav</nav>
      <Outlet />
    </>
  );
};

export default HomeLayout;
