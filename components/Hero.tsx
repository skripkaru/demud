import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'
import Image from 'next/image'
import Button from '@components/UI/Button'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const Hero = () => {
  const slides = [
    {
      image: '/images/hero/slide-01.png',
      title: 'Сегодня в тренде',
      body: 'Современный декор для дома',
    },
    {
      image: '/images/hero/slide-01.png',
      title: 'Сегодня в тренде',
      body: 'Современный декор для дома',
    },
    {
      image: '/images/hero/slide-01.png',
      title: 'Сегодня в тренде',
      body: 'Современный декор для дома',
    },
  ]

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      effect="fade"
      loop
    >
      {slides.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="relative h-[800px]">
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={item.image}
              alt={item.title}
              layout="fill"
            />
            <div className="relative h-full container px-4 md:px-8 mx-auto flex flex-col justify-center items-start">
              <div className="md:w-1/2 ">
                <p className="text-gray-800 text-4xl lg:text-5xl font-semibold mb-4 md:mb-6">
                  {item.title}
                </p>
                <p className="text-gray-800 md:text-xl mb-4 md:mb-6">
                  {item.body}
                </p>
                <Button variant="fill">Заказать сейчас</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Hero
