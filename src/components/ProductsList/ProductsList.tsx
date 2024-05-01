import { ProductsResponse, formatAsTurkishLira } from '@/utils';
import { useLoaderData, Link } from 'react-router-dom';
import { CardContent, Card } from '../ui/card';

const ProductsList = () => {
  const { data: products } = useLoaderData() as ProductsResponse;
  // formatAsTurkishLira()
  return (
    <div className='mt-12 grid gap-y-8'>
      {products?.map((product) => {
        const { title, price, image, company } = product.attributes;
        const liraAmount = formatAsTurkishLira(price);
        console.log(product);
        return (
          <Link
            to={`/comfy/products/${product.id}`}
            key={product.id}
            className=''
          >
            <Card>
              <CardContent className='p-8 gap-y-4 grid md:grid-cols-3 '>
                <img
                  src={image}
                  alt={title}
                  className='h-64 w-full md:h-48  md:w-48  rounded-md object-cover'
                />
                <div>
                  <h2 className='text-xl font-semibold capitalize'>{title}</h2>
                  <h4>{company}</h4>
                </div>
                <p className='text-primary md:ml-auto'>{liraAmount}</p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsList;
