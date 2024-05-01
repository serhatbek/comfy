import { ProductsGrid, SectionTitle } from '../../components';

const FeaturedProducts = () => {
  return (
    <section className='pt-24'>
      <SectionTitle text='featured products' />
      <ProductsGrid />
    </section>
  );
};
export default FeaturedProducts;
