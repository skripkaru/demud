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
import { imageUpload } from '@utils/imageUpload'

const Profile: NextPage = () => {
  const { auth } = useAppSelector((state) => state.auth)
  const { user } = useAppSelector((state) => state.user)
  const { notify } = useAppSelector((state) => state.notify)
  const { setNotify, setUser, setAuth } = useActions()
  const { name, avatar, password, cf_password } = user

  useEffect(() => {
    auth.user && setUser({ ...user, name: auth.user.name })
  }, [auth.user])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleUpdateProfile = (e: SyntheticEvent) => {
    e.preventDefault()
    if (password) {
      const errMsg = valid(name, auth.user.email, password, cf_password)
      errMsg && setNotify({ error: errMsg })
      updatePassword()
    }

    if (name !== auth.user.name || avatar !== auth.user.avatar) {
      updateInfo()
    }
  }

  const updatePassword = () => {
    setNotify({ loading: true })
    patchData('user/resetPassword', { password: password }, auth.token).then(
      (res) => {
        if (res.err) {
          return setNotify({ error: res.err })
        }
        return setNotify({ success: res.msg })
      }
    )
  }

  const changeAvatar = (e: any) => {
    const file = e.target.files[0]

    if (!file) {
      return setNotify({ error: 'File does not exist' })
    }

    // 1024 * 1024 = 1mb
    if (file.size > 1024 * 1024) {
      return setNotify({ error: 'The largest image size is 1mb' })
    }

    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      return setNotify({ error: 'Image format is incorrect' })
    }

    setUser({ ...user, avatar: file })
  }

  const updateInfo = async () => {
    let media: any
    setNotify({ loading: true })

    if (avatar) {
      media = await imageUpload([avatar])
    }

    patchData(
      'user',
      {
        name,
        avatar: avatar ? media[0].url : auth.user.avatar,
      },
      auth.token
    ).then((res) => {
      if (res.err) {
        return setNotify({ error: res.err })
      }

      setAuth({ token: auth.token, user: res.user })
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
          <h1 className="text-gray-800 text-2xl lg:text-3xl font-semibold text-center mb-4 md:mb-6">
            Профиль
          </h1>
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3">
              <h2 className="text-lg md:text-xl font-semibold mb-2">Заказы</h2>
            </div>

            <div className="col-span-2 p-4 rounded border shadow-lg">
              <h2 className="text-lg md:text-xl font-semibold mb-2">
                {auth.user.role === 'user' ? 'Пользователь' : 'Администратор'}
              </h2>

              <div className="mb-4">
                <label className="w-24 h-24 flex flex-col items-center border hover:border-teal-500 rounded-full cursor-pointer overflow-hidden">
                  <Image
                    src={
                      avatar ? URL.createObjectURL(avatar) : auth.user.avatar
                    }
                    alt={auth.user.name}
                    className="w-full h-full object-cover"
                    width="640"
                    height="640"
                  />
                  <input
                    id="file_up"
                    type="file"
                    name="file"
                    className="hidden"
                    accept="image/*"
                    onChange={changeAvatar}
                  />
                </label>
              </div>

              <form>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  label="Имя"
                  placeholder="Введите имя"
                  value={name}
                  onChange={handleChange}
                />
                <Input
                  id="email"
                  name="email"
                  type="text"
                  label="Email"
                  placeholder="Введите email"
                  value={auth.user.email}
                  disabled
                />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  label="Пароль"
                  placeholder="Введите пароль"
                  value={password}
                  onChange={handleChange}
                />
                <Input
                  id="cf_password"
                  name="cf_password"
                  type="password"
                  label="Новый пароль"
                  placeholder="Повторите пароль"
                  value={cf_password}
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
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile
