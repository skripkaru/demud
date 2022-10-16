import { FC, ReactNode } from 'react'
import Head from 'next/head'
import SvgSprite from '@components/UI/SvgSprite'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Notify from '@components/Notify'

interface LayoutProps {
  children: ReactNode | JSX.Element
}

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props

  return (
    <>
      <Head>
        <title>De’mud</title>
        <meta name="description" content="Современный декор для дома" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-full">
        <Header />
        <Notify />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <SvgSprite />
    </>
  )
}

export default Layout
