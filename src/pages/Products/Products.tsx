import { Filters, PaginationContainer, ProductsContainer } from '@/components';
import { customFetch, type ProductsResponse } from '@/utils';
import { LoaderFunction } from 'react-router-dom';

const url = '/comfy/products';

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  return { ...response.data };
};

const Products = () => {
  customFetch;
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
