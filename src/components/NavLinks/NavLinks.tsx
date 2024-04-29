import { links } from '@/utils';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className='hidden lg:flex justify-center items-center gap-x-4'>
      {links.map((link) => {
        return (
          <li key={link.label}>
            <NavLink
              to={link.href}
              className={({ isActive }) => {
                return `capitalize font-light tracking-wide ${
                  isActive ? 'text-primary' : ''
                }`;
              }}
            >
              {link.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
export default NavLinks;
