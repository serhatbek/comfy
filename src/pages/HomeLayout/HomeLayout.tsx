import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <header>header</header>
      <nav>nav</nav>
      <Outlet />
    </>
  );
};

export default HomeLayout;
