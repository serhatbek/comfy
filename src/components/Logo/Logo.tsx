import { Armchair } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link
      to='/comfy/'
      className='hidden lg:flex justify-center items-center bg-primary p-2 rounded-lg text-white'
    >
      <Armchair className='w-8 h-8' />
    </Link>
  );
};
export default Logo;
