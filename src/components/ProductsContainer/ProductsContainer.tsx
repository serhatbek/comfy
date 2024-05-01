import { useState } from 'react';
import { type ProductsResponse } from '@/utils';
import { useLoaderData } from 'react-router-dom';
import { LayoutGrid, List } from 'lucide-react';
import { ProductsList, ProductsGrid } from '@/components';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const ProductsContainer = () => {
  const { meta } = useLoaderData() as ProductsResponse;
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  return (
    <>
      <section>
        <div className='flex justify-between items-center mt-8'>
          <h4 className='font-medium text-md'>
            {totalProducts} product{totalProducts > 1 && 's'}
          </h4>
          <div className='flex gap-x-4'>
            <Button
              onClick={() => setLayout('grid')}
              size='icon'
              variant={layout === 'grid' ? 'default' : 'ghost'}
            >
              <LayoutGrid />
            </Button>
            <Button
              onClick={() => setLayout('list')}
              variant={layout === 'list' ? 'default' : 'ghost'}
              size='icon'
            >
              <List />
            </Button>
          </div>
        </div>
        <Separator className='mt-4' />
      </section>

      <div>
        {totalProducts === 0 ? (
          <h5 className='text-2xl mt-16'>
            Sorry, no products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};
export default ProductsContainer;
