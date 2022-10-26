import type { NextPage } from 'next'
import Head from 'next/head'
import Faq from '@components/Faq'
import Advantages from '@components/Advantages'
import About from '@components/About'
import Hero from '@components/Hero'
import Products from '@components/Products'
import { getData } from '@utils/fetchData'
import { IProduct } from '../types'
import React, { useState } from 'react'

interface HomeProps {
  products: IProduct[]
}

const Home: NextPage<HomeProps> = (props) => {
  const [products] = useState(props.products)

  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>

      <Hero />
      <About />
      <Products products={products} />
      <Advantages />
      <Faq />
    </>
  )
}

export async function getServerSideProps() {
  // @ts-ignore
  const res = await getData('product')

  return {
    props: {
      products: res.products,
      result: res.result,
    },
  }
}

export default Home
