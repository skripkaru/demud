import React, { ChangeEvent, SyntheticEvent, useEffect } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useAppSelector } from '@hooks/useAppSelector'
import Image from 'next/image'
import Input from '@components/UI/Input'
import Button from '@components/UI/Button'
import { useActions } from '@hooks/useActions'
import valid from '@utils/valid'
import { patchData } from '@utils/fetchData'

const Profile: NextPage = () => {
  const { auth } = useAppSelector((state) => state.auth)
  const { user } = useAppSelector((state) => state.user)
  const { notify } = useAppSelector((state) => state.notify)
  const { setUser, setNotify } = useActions()

  useEffect(() => {
    auth.user && setUser({ ...user, name: auth.user.name })
  }, [auth.user])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleUpdateProfile = (e: SyntheticEvent) => {
    e.preventDefault()
    if (user.password) {
      const errMsg = valid(
        user.name,
        auth.user.email,
        user.password,
        user.cf_password
      )
      errMsg && setNotify({ error: errMsg })
      updatePassword()
    }
  }

  const updatePassword = () => {
    setNotify({ loading: true })
    patchData(
      'user/resetPassword',
      { password: user.password },
      auth.token
    ).then((res) => {
      if (res.err) {
        return setNotify({ error: res.err })
      }
      return setNotify({ success: res.msg })
    })
  }

  if (!auth.user) return null

  return (
    <>
      <Head>
        <title>Профиль</title>
      </Head>

      <section className="py-6 sm:py-8 lg:py-12">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h1 className="text-gray-800 text-2xl lg:text-3xl font-semibold text-center mb-4 md:mb-6">
              Профиль
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2">
                {auth.user.role ? 'Пользователь' : 'Администратор'}
              </h2>
              {auth.user.avatar ? (
                <div className="w-8 h-8 mr-2 rounded-full overflow-hidden">
                  <Image
                    src={auth.user.avatar}
                    alt={auth.user.name}
                    className="w-full h-full object-cover"
                    width="640"
                    height="640"
                  />
                </div>
              ) : (
                <svg className="icon w-4 h-4 mr-2">
                  <use xlinkHref="#person"></use>
                </svg>
              )}

              <input id="file_up" type="file" name="file" />
              <form>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  label="Имя"
                  placeholder="Введите имя"
                  value={user.name}
                  onChange={handleChange}
                />
                <Input
                  id="email"
                  name="email"
                  type="text"
                  label="Email"
                  placeholder="Введите email"
                  defaultValue={auth.user.email}
                  disabled
                />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  label="Пароль"
                  placeholder="Введите пароль"
                  value={user.password}
                  onChange={handleChange}
                />
                <Input
                  id="cf_password"
                  name="cf_password"
                  type="password"
                  label="Новый пароль"
                  placeholder="Повторите пароль"
                  value={user.cf_password}
                  onChange={handleChange}
                />
                <Button
                  variant="fill"
                  disabled={notify.loading}
                  onClick={handleUpdateProfile}
                >
                  Сохранить
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2">Заказы</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile
