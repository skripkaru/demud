import type {NextPage} from 'next'
import Link from "next/link";
import {products} from "../constants";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, EffectFade, Autoplay} from 'swiper';
import Button from "components/UI/Button";
import Icon from "components/UI/Icon";
import Layout from "../components/Layout";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

const Home: NextPage = () => {

  return (
    <Layout>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        loop
      >
        <SwiperSlide>
          <div className='relative h-screen max-h-[1080px]'>
            <img className='absolute top-0 left-0 w-full h-full object-cover' src="/images/hero-01.png" alt=""/>
            <div className='relative h-full container px-4 md:px-8 mx-auto flex flex-col justify-center items-start'>
              <div className='md:w-1/2 '>
                <p className="text-gray-800 text-4xl lg:text-5xl font-semibold mb-4 md:mb-6">Сегодня в тренде</p>
                <p className="text-gray-800 md:text-xl mb-4 md:mb-6">
                  Современный декор для дома
                </p>
                <Button variant='primary'>Заказать сейчас</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative h-screen max-h-[1080px]'>
            <img className='absolute top-0 left-0 w-full h-full object-cover' src="/images/hero-02.png" alt=""/>
            <div className='relative h-full container px-4 md:px-8 mx-auto flex flex-col justify-center items-start'>
              <div className='md:w-1/2 '>
                <p className="text-gray-800 text-4xl lg:text-5xl font-semibold mb-4 md:mb-6">Сегодня в тренде</p>
                <p className="text-gray-800 md:text-xl mb-4 md:mb-6">
                  Современный декор для дома
                </p>
                <Button variant='primary'>Заказать сейчас</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <section className="py-6 sm:py-8 lg:py-12">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="flex md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className="object-cover object-center rounded-lg" alt="hero" src="/images/about.png"/>
            </div>
            <div
              className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="text-gray-800 text-2xl lg:text-3xl font-semibold text-center mb-4 md:mb-6">О нас</h1>
              <p className="text-gray-800 mb-4">
                Мы стремимся к безотходному бизнесу: вся наша упаковка полностью не содержит пластика, подлежит
                вторичной переработке и/или биоразложению.
              </p>
              <p className="text-gray-800 mb-4">
                Наша продукция изготовлена из композитного материала на водной основе, который не содержит
                растворителей и летучих органических соединений, как обычные смолы.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-12">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-semibold text-center mb-4 md:mb-6">Преимущества</h2>
            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              Совершая покупки у нас, вы в надежных руках
            </p>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
            <div className="flex gap-4 md:gap-6">
              <div
                className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-teal-500 text-white rounded-lg shadow-lg">
                <Icon name='check' width={24} height={24}/>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Ручная работа</h3>
                <p className="text-gray-500 mb-2">
                  Все изделия изготавливаются вручную, что делает их эксклюзивными и поистине уникальными.
                </p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <div
                className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-teal-500 text-white rounded-lg shadow-lg">
                <Icon name='check' width={24} height={24}/>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Эко материал</h3>
                <p className="text-gray-500 mb-2">
                  Мы работаем только с гипоаллергенным и не токсичным материалом
                </p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <div
                className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-teal-500 text-white rounded-lg shadow-lg">
                <Icon name='check' width={24} height={24}/>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Быстрая доставка</h3>
                <p className="text-gray-500 mb-2">
                  Мы осуществляем доставку в любую точку России, поэтому у нас нет проблем с доставкой к вам.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-12">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-semibold text-center mb-4 md:mb-6">Популярное</h2>
            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              Изделия, которые заказывают чаще всего
            </p>
          </div>
          <div
            className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map(item =>
              <Link href={`/product/${item.id}`} key={item.id}>
                <a className="group">
                  <div
                    className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img src={item.images[0]}
                         alt={item.title}
                         className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"/>
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{item.price}&#8381;</p>
                </a>
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-12">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-semibold text-center mb-4 md:mb-6">Вопросы</h2>
            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              Здесь вы найдете ответы на самые популярные вопросы
            </p>
          </div>
          <div className="flex flex-col max-w-screen-sm border-t mx-auto">
            <div className="border-b">
              <div
                className="flex justify-between text-black hover:text-teal-500 active:text-teal-600 cursor-pointer gap-2 py-4">
                <span className="md:text-lg font-semibold transition duration-100">Как заказать?</span>
                <span className="text-teal-500">
                    <Icon name='chevron-down' width={20} height={20}/>
                  </span>
              </div>
              <p className="hidden text-gray-500 mb-4">Только у нас</p>
            </div>

            <div className="border-b">
              <div
                className="flex justify-between text-black hover:text-teal-500 active:text-teal-600 cursor-pointer gap-2 py-4">
                <span className="md:text-lg font-semibold transition duration-100">Что делать если?</span>
                <span className="text-teal-500 rotate-180">
                    <Icon name='chevron-down' width={20} height={20}/>
                  </span>
              </div>
              <p className="text-gray-500 mb-4">
                Покупать
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
