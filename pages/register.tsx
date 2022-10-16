import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import valid from '@utils/valid'
import {useActions} from '@hooks/useActions'
import {postData} from '@utils/fetchData'
import {useAppSelector} from '@hooks/useAppSelector'
import {useRouter} from 'next/router'
import Input from "@components/UI/Input";
import Button from "@components/UI/Button";

const Register = () => {
  const initialState = {name: '', email: '', password: '', cf_password: ''}
  const [userData, setUserData] = useState(initialState)
  const {name, email, password, cf_password} = userData
  const {setNotify} = useActions()
  const {auth} = useAppSelector((state) => state.auth)
  const router = useRouter()

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setUserData({...userData, [name]: value})
    setNotify({})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errMsg = valid(name, email, password, cf_password)

    if (errMsg) {
      return setNotify({error: errMsg})
    }

    setNotify({loading: true})

    const res = await postData('auth/register', userData, '')

    if (res.err) {
      return setNotify({error: res.err})
    }

    return setNotify({success: res.msg})
  }

  useEffect(() => {
    if (Object.keys(auth).length !== 0) {
      router.push('/')
    }
  }, [auth])

  return (
    <>
      <Head>
        <title>Регистрация</title>
      </Head>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
            Регистрация
          </h2>

          <form
            className="max-w-lg border rounded mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <Input
                id="name"
                type="text"
                name="name"
                label="Имя"
                placeholder="Введите имя"
                value={name}
                onChange={handleChangeInput}
              />
              <Input
                id="email"
                type="email"
                name="email"
                label="Имя"
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
              <Input
                id="cf_password"
                type="password"
                name="cf_password"
                label="Повторите пароль"
                placeholder="Повторите пароль"
                value={cf_password}
                onChange={handleChangeInput}
              />
              <Button variant='fill'>
                Зарегистрироваться
              </Button>
            </div>

            <div className="flex justify-center items-center bg-gray-100 p-4">
              <p className="text-gray-500 text-sm text-center">
                У вас уже есть аккаунт?{' '}
                <Link href="/login">
                  <a className="text-teal-500 hover:text-teal-600 active:text-teal-700 transition duration-100">
                    Войти
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

export default Register
