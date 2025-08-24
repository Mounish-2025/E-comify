import React from 'react';
import ProductListing from './ProductListing';
import { featuredItems as menFeatured, newArrivals as menNewArrivals } from '../data/menProducts';

const MenPage = () => (
  <ProductListing
    breadcrumbSection="Men"
    heading="Men's Clothing"
    description="Discover our range of men's clothing, combining style with comfort and function."
    featuredItems={menFeatured}
    newArrivals={menNewArrivals}
  />
);

export default MenPage;
