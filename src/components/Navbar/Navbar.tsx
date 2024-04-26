import {
  Logo,
  CartButton,
  LinksDropdown,
  ModeToggle,
  NavLinks,
} from '../../components';

const Navbar = () => {
  return (
    <nav className='bg-muted py-4'>
      <div className='align-element flex justify-between items-center'>
        <Logo />
        <LinksDropdown />
        <NavLinks />
        <div className='flex justify-center items-center gap-x-4'>
          <ModeToggle />
          <CartButton />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
