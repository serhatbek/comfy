import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Cart = () => {
  return (
    <div>
      <h2 className='text-4xl'>CART PAGE</h2>
      <Link to='/comfy/' className='text-red-900 bg-slate-500'>
        Back to home
      </Link>

      <Button asChild size='lg'>
        <Link to='/comfy/'> Home Button </Link>
      </Button>
    </div>
  );
};

export default Cart;
