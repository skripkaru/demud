import React, { FC } from 'react'
import { IProduct } from '../types'
import Image from 'next/image'
import Link from 'next/link'
import { useActions } from '@hooks/useActions'
import Button from '@components/UI/Button'

interface CartItemProps {
  item: IProduct
}

const CartItem: FC<CartItemProps> = (props) => {
  const { item } = props
  const { incrementQuantity, decrementQuantity, setModal } = useActions()

  return (
    <li className="mb-2">
      <div className="flex p-2 border border-gray-100 rounded">
        <Link href={`/product/${item._id}`}>
          <a className="h-24 w-24 flex-shrink-0 overflow-hidden rounded">
            <Image
              src={item.images[0].url}
              alt={item.images[0].url}
              className="h-full w-full object-cover object-center"
              width="94"
              height="94"
              layout="responsive"
            />
          </a>
        </Link>
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <Link href={`/product/${item._id}`}>
                  <a>{item.title}</a>
                </Link>
              </h3>
              <p className="ml-4">{item.price * item.quantity} ₽</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{item.color}</p>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <div className="flex items-center">
              <Button
                variant="outline"
                className="flex items-center justify-center w-8 h-8 mr-2 border rounded"
                onClick={() => decrementQuantity(item)}
                disabled={item.quantity === 1}
              >
                -
              </Button>
              <p className="text-gray-500">{item.quantity} шт</p>
              <Button
                variant="outline"
                className="flex items-center justify-center w-8 h-8 ml-2 border rounded"
                onClick={() => incrementQuantity(item)}
                disabled={item.quantity === item.inStock}
              >
                +
              </Button>
            </div>
            <div className="flex">
              <button
                className="font-medium text-teal-600 hover:text-teal-500"
                onClick={() => setModal(item)}
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem
