import { FeaturedProducts, Hero } from '../../components';
import { type LoaderFunction } from 'react-router-dom';
import { type ProductsResponse, customFetch } from '@/utils';

const url = '/products?featured=true';

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  // console.log('landing response data', response);
  return { ...response.data };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
