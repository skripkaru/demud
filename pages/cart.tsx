import React, { SyntheticEvent, useEffect, useState } from 'react'
import Head from 'next/head'
import { useAppSelector } from '@hooks/useAppSelector'
import { useActions } from '@hooks/useActions'
import { useRouter } from 'next/router'
import { postData } from '@utils/fetchData'
import CartItem from '@components/CartItem'
import Button from '@components/UI/Button'
import Input from '@components/UI/Input'
import Modal from '@components/UI/Modal'

const Cart = () => {
  const { cart } = useAppSelector((state) => state.cart)
  const { auth } = useAppSelector((state) => state.auth)
  const { data } = useAppSelector((state) => state.modal)
  const { closeModal, removeFromCart, setNotify } = useActions()
  const router = useRouter()
  const [address, setAddress] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [total, setTotal] = useState<number>(0)
  const [quantity, setQuantity] = useState<number>(0)

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity
      }, 0)

      setTotal(res)
    }

    const getQuantity = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.quantity
      }, 0)

      setQuantity(res)
    }

    getTotal()
    getQuantity()
  }, [cart])

  const handleSubmit = () => {
    data && removeFromCart(data)
  }

  const createOrder = (e: SyntheticEvent) => {
    e.preventDefault()

    if (!auth.user) {
      return router.push('/login')
    }

    if (address === '' || phone === '') {
      return setNotify({ error: 'Заполните поля!' })
    }

    console.log('Order created!')
    postData('order', { address, phone, cart, total }, auth.token).then((res) =>
      console.log(res)
    )
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
          <div className="grid grid-cols-5 gap-4">
            <ul className="col-span-3">
              {cart.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
            </ul>
            <div className="col-span-2 flex flex-col p-4 rounded shadow">
              <form>
                <h2 className="text-lg md:text-xl font-semibold mb-2">
                  Оформление заказа
                </h2>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  label="Адрес"
                  placeholder="Введите адрес"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <Input
                  id="phone"
                  name="phone"
                  type="text"
                  label="Телефон"
                  placeholder="Введите телефон"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div className="mb-1">
                  Количество:{' '}
                  <span className="font-semibold">{quantity} шт</span>
                </div>
                <div className="mb-4">
                  Итого: <span className="font-semibold">{total} ₽</span>
                </div>
                <Button variant="fill" onClick={createOrder}>
                  Заказать
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Modal>
        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3
                className="text-lg font-medium leading-6 text-gray-900"
                id="modal-title"
              >
                Удалить товар из корзины
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Вы действительно хотите удалить данный товар?
                </p>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={closeModal}
              >
                Нет
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleSubmit}
              >
                Да
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Cart
