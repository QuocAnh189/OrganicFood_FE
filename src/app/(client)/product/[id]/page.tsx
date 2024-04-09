//meta
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Product',
  description: 'Generated by create next app'
};

//page
import Product from './product';

const AboutPage = () => {
  return <Product />;
};

export default AboutPage;
