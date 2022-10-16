import React from 'react'
import Head from "next/head";
import {useAppSelector} from "@hooks/useAppSelector";
import Link from "next/link";
import CartItem from "@components/CartItem";
import Button from "@components/UI/Button";
import Input from "@components/UI/Input";
import Textarea from "@components/UI/Textarea";

const Cart = () => {
  const {cart} = useAppSelector(state => state.cart)
  const {auth} = useAppSelector(state => state.auth)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }

  if (cart.length === 0) {
    return (
      <section className="py-6 sm:py-8 lg:py-12">
        <div className="container px-4 md:px-8 mx-auto">
          <h1 className="text-gray-800 text-2xl lg:text-3xl font-semibold text-center mb-4 md:mb-6">
            В корзине ничего нет
          </h1>
        </div>
      </section>
    )
  }

  return (
    <>
      <Head>
        <title>Корзина</title>
      </Head>
      <section className="py-6 sm:py-8 lg:py-12">
        <div className="container px-4 md:px-8 mx-auto">
          <h1 className="text-gray-800 text-2xl lg:text-3xl font-semibold text-center mb-4 md:mb-6">
            Корзина
          </h1>
          <div className='grid grid-cols-5 gap-4'>
            <ul className='col-span-3'>
              {cart.map(item =>
                <CartItem key={item._id} item={item}/>
              )}
            </ul>
            <div className="col-span-2 flex flex-col p-4 rounded shadow">
              <form>
                <h2 className="text-lg md:text-xl font-semibold mb-2">Оформление заказа</h2>
                <Input id='address' name='address' type='text' label='Адрес' placeholder='Введите адрес'/>
                <Input id='phone' name='phone' type='text' label='Телефон' placeholder='Введите телефон'/>
                <Textarea id='message' name='message' label='Сообщение' placeholder='Введите сообщение'/>
                <div className='mb-1'>
                  Количество:
                  {' '}
                  <span className='font-semibold'>{getTotal().totalQuantity} шт</span>
                </div>
                <div className='mb-4'>
                  Итого:
                  {' '}
                  <span className='font-semibold'>{getTotal().totalPrice} ₽</span>
                </div>
                <Link href={auth.user ? '#' : '/login'}>
                  <Button variant='fill'>Заказать</Button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
