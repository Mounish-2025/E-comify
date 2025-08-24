import React from 'react';
import ProductListing from './ProductListing';
import { featuredItems as womenFeatured, newArrivals as womenNewArrivals } from '../data/womenProducts';

const WomenPage = () => (
  <ProductListing
    breadcrumbSection="Women"
    heading="Women's Clothing"
    description="Explore our curated collection of women's clothing, featuring the latest trends and timeless classics."
    featuredItems={womenFeatured}
    newArrivals={womenNewArrivals}
  />
);

export default WomenPage;
