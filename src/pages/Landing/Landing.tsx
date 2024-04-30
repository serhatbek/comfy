import { FeaturedProducts, Hero } from '../../components';
import { type LoaderFunction, useLoaderData } from 'react-router-dom';
import { type ProductsResponse, customFetch } from '@/utils';

const url = '/products?featured=true';

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  // console.log('landing response data', response);
  return { ...response.data };
};

const Landing = () => {
  const result = useLoaderData() as ProductsResponse;
  // console.log('landing data', result);
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
