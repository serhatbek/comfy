import { Outlet } from 'react-router-dom';
import { Header } from '../../components';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <nav>nav</nav>
      <div className='align-element py-2'>
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
