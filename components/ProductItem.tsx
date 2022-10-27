import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IProduct } from '../types'

interface ProductItemProps {
  product: IProduct
}

const ProductItem: FC<ProductItemProps> = (props) => {
  const { product } = props

  return (
    <Link href={`/product/${product._id}`}>
      <a className="group">
        <div className="w-full overflow-hidden rounded bg-gray-200">
          <Image
            src={product.images[0].url}
            alt={product.images[0].url}
            className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
            width="640"
            height="700"
            layout="responsive"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
        <div className="flex items-center justify-between">
          <p className="mt-1 text-lg font-medium text-gray-900">
            {product.price} ₽
          </p>
        </div>
      </a>
    </Link>
  )
}

export default ProductItem
