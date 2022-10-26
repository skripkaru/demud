import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useActions } from '@hooks/useActions'
import { getData, postData } from '@utils/fetchData'
import Cookie from 'js-cookie'
import { useAppSelector } from '@hooks/useAppSelector'
import { useRouter } from 'next/router'
import Input from '@components/UI/Input'
import Button from '@components/UI/Button'

const Login = () => {
  const initialState = { name: '', email: '', password: '', cf_password: '' }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData
  const { setNotify, setAuth } = useActions()
  const { auth } = useAppSelector((state) => state.auth)
  const router = useRouter()

  // useEffect(() => {
  //   const firstLogin = localStorage.getItem('firstLogin')
  //
  //   if (firstLogin) {
  //     getData('auth/accessToken', '').then((res) => {
  //       if (res.err) {
  //         return localStorage.removeItem('firstLogin')
  //       }
  //
  //       setAuth({
  //         token: res.access_token,
  //         user: res.user,
  //       })
  //     })
  //   }
  // })

  useEffect(() => {
    if (Object.keys(auth).length !== 0) {
      router.push('/')
    }
  }, [auth])

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
    setNotify({})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setNotify({ loading: true })

    const res = await postData('auth/login', userData, '')

    if (res.err) {
      return setNotify({ error: res.err })
    }

    setNotify({ success: res.msg })

    setAuth({
      token: res.access_token,
      user: res.user,
    })

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7,
    })
    // localStorage.setItem('firstLogin', String(true))
  }

  return (
    <>
      <Head>
        <title>Вход</title>
      </Head>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
            Вход
          </h2>

          <form
            className="max-w-lg border rounded mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <Input
                id="email"
                type="email"
                name="email"
                label="Email"
                placeholder="Введите email"
                value={email}
                onChange={handleChangeInput}
              />
              <Input
                id="password"
                type="password"
                name="password"
                label="Пароль"
                placeholder="Введите пароль"
                value={password}
                onChange={handleChangeInput}
              />
              <Button variant="fill">Войти</Button>
            </div>

            <div className="flex justify-center items-center bg-gray-100 p-4">
              <p className="text-gray-500 text-sm text-center">
                У вас нет аккаунта?{' '}
                <Link href="/register">
                  <a className="text-teal-500 hover:text-teal-600 active:text-teal-700 transition duration-100">
                    Зарегистрироваться
                  </a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
