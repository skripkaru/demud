import React, {FC} from 'react';
import ProductItem from "@components/ProductItem";
import {Product} from "../types";

interface ProductsProps {
  products: Product[]
}

const Products:FC<ProductsProps> = (props) => {
  const {products} = props

  return (
    <section className="py-6 sm:py-8 lg:py-12">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-semibold text-center mb-4 md:mb-6">
            Каталог
          </h2>
          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            Наши изделия
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.length !== 0 ? products.map(product => (
            <ProductItem key={product._id} product={product}/>
          )) : (
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-semibold text-center mb-4 md:mb-6">
              Нет товаров
            </h2>
          )}
        </div>
      </div>
    </section>
  );
};


export default Products;