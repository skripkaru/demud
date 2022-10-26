import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import React, { useState } from 'react'
import { getData } from '@utils/fetchData'
import { IProduct } from '../../types'
import Button from '@components/UI/Button'
import { useActions } from '@hooks/useActions'
import { useAppSelector } from '@hooks/useAppSelector'

interface ProductProps {
  product: IProduct
}

const Product: NextPage<ProductProps> = (props) => {
  const [product] = useState(props.product)
  const [tab, setTab] = useState(0)
  const { addToCart, setNotify } = useActions()
  const { cart } = useAppSelector((state) => state.cart)

  const handleAddToCart = (product: IProduct, cart: IProduct[]) => {
    if (product.inStock === 0) {
      return setNotify({ error: 'Этот товар отсутствует на складе' })
    }

    const current = cart.every((item) => item._id !== product._id)
    if (!current) {
      return setNotify({ success: 'Товар добавлен в корзину' })
    }

    return addToCart(product)
  }

  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full">
              <Image
                src={product.images[tab].url}
                alt={product.images[tab].url}
                className="rounded bg-gray-100"
                width="400"
                height="400"
                layout="responsive"
              />
              <div className="flex items-center gap-2 mt-4">
                {product.images.map((item, i) => (
                  <div
                    key={item.url}
                    className={`w-1/4 p-1 border-2 rounded overflow-hidden hover:border-teal-500${
                      tab === i ? ' border-teal-500' : ''
                    }`}
                  >
                    <Image
                      src={item.url}
                      alt={item.url}
                      className="bg-gray-100 cursor-pointer"
                      width="80"
                      height="80"
                      layout="responsive"
                      onClick={() => setTab(i)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title}
              </h1>
              <p className="leading-relaxed text-sm md:text-base">
                {product.description}
              </p>
              <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-6 pb-5 border-b-2 border-gray-100 mb-5 text-sm">
                <div className="flex flex-col">
                  <span className="font-medium">Цвет</span>
                  <span>{product.color}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">Размер</span>
                  <span>{product.size} см</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">В наличии</span>
                  <span>
                    {product.inStock > 0
                      ? `${product.inStock} шт`
                      : 'Нет в наличии'}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">Продано</span>
                  <span>{product.sold}шт</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {product.price} ₽
                </span>
                <Button
                  variant="fill"
                  className="flex ml-auto"
                  onClick={() => handleAddToCart(product, cart)}
                  disabled={product.inStock === 0}
                >
                  Купить
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// @ts-ignore
export async function getServerSideProps({ params: { id } }) {
  // @ts-ignore
  const res = await getData(`product/${id}`)

  return {
    props: {
      product: res.product,
    },
  }
}

export default Product
