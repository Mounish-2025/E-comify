import React from 'react';
import ProductListing from './ProductListing';
import { featuredItems as accFeatured, newArrivals as accNewArrivals } from '../data/accessoriesProducts';

const AccessoriesPage = () => (
  <ProductListing
    breadcrumbSection="Accessories"
    heading="Accessories"
    description="Browse the latest accessories to complete your look."
    featuredItems={accFeatured}
    newArrivals={accNewArrivals}
  />
);

export default AccessoriesPage;
