import Link from 'next/link'
import Image from 'next/image'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { useAppSelector } from '@hooks/useAppSelector'
import { useActions } from '@hooks/useActions'
import { useState } from 'react'

const Header = () => {
  const router = useRouter()
  const { auth } = useAppSelector((state) => state.auth)
  const { cart } = useAppSelector((state) => state.cart)
  const { setAuth, setNotify } = useActions()
  const [dropdown, setDropdown] = useState<boolean>(false)

  const handleLogout = () => {
    Cookie.remove('refreshtoken', { path: 'api/auth/accessToken' })
    setAuth({})
    setNotify({ success: 'Вы вышли!' })
  }

  const getTotalQuantity = () => {
    const cartCopy = [...cart]
    let total = 0
    cartCopy.forEach((item) => {
      total += item.quantity
    })
    return total
  }

  const loggedRouter = () => {
    return (
      <li className="relative">
        <a
          className="mr-5 hover:text-gray-800 flex items-center"
          aria-expanded={dropdown ? 'true' : 'false'}
          onClick={() => setDropdown((prev) => !prev)}
        >
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
          {auth.user.name}
        </a>

        <ul
          className={`absolute top-full border rounded bg-white shadow-lg ${
            dropdown ? '' : 'hidden'
          }`}
        >
          <li>
            <Link href="/profile">
              <a className="text-gray-700 block px-4 py-2 text-sm">Профиль</a>
            </Link>
          </li>
          <li>
            <a
              className="text-gray-700 block px-4 py-2 text-sm"
              onClick={handleLogout}
            >
              Выйти
            </a>
          </li>
        </ul>
      </li>
    )
  }

  return (
    <header className="sticky top-0 left-0 w-full z-10 bg-gray-100">
      <div className="container p-4 mx-auto flex flex-wrap md:flex-row items-center">
        <Link href="/">
          <a className="title-font font-medium text-gray-900 text-2xl">
            De’mud
          </a>
        </Link>

        <nav className="ml-auto">
          <ul className="flex items-center justify-center ml-auto text-base">
            <li>
              <Link href="/cart">
                <a
                  className={`flex items-center mr-5 hover:text-gray-800${
                    router.pathname === '/cart' ? ' text-teal-500' : ''
                  }`}
                >
                  <div className="relative">
                    <svg className="icon w-4 h-4 mr-2">
                      <use xlinkHref="#cart"></use>
                    </svg>
                    <span className="absolute -top-2 right-0 flex items-center justify-center w-4 h-4 rounded-full bg-teal-500 text-white text-xs">
                      {getTotalQuantity() || 0}
                    </span>
                  </div>
                  Корзина
                </a>
              </Link>
            </li>
            {Object.keys(auth).length === 0 ? (
              <li>
                <Link href="/login">
                  <a
                    className={`flex items-center mr-5 hover:text-gray-800${
                      router.pathname === '/login' ? ' text-teal-500' : ''
                    }`}
                  >
                    <svg className="icon w-4 h-4 mr-2">
                      <use xlinkHref="#person"></use>
                    </svg>
                    Войти
                  </a>
                </Link>
              </li>
            ) : (
              loggedRouter()
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
