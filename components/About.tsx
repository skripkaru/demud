import React from 'react';
import Image from "next/image";

const About = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-12">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="flex md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              src="/images/about.png"
              alt="О компании De’mud"
              width="720"
              height="600"
            />
          </div>
          <div
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-gray-800 text-2xl lg:text-3xl font-semibold text-center mb-4 md:mb-6">
              О нас
            </h1>
            <p className="text-gray-800 mb-4">
              Наша миссия — создавать уникальный домашний декор ручной работы
              на любой вкус, и мы делаем это, потому что верим, что маленькие
              детали имеют значение. Мы хотим предоставить нашим клиентам
              уникальный опыт домашнего декора — опыт, который поможет им
              чувствовать себя комфортно, безопасно и расслабленно в своем
              собственном пространстве.
            </p>
            <p className="text-gray-800 mb-4">
              Наш декор изготавливается вручную из лучших материалов и бывают
              самых разных цветов и размеров. Если вы действительно хотите
              поднять свой домашний декор на новый уровень, мы предлагаем
              модные и современные изделия из высокопрочного гипса, которые
              дополнят эстетику и дополнят ваш дом.
            </p>
            <p className="text-gray-800 mb-4">
              Наши изделия ручной работы станут замечательным подарком на
              рождение ребенка, свадьбу, Рождество, день рождения и многое
              другое.
            </p>
            <p className="text-gray-800 mb-4">
              Помня о том, что сокращение отходов всегда было для нас
              приоритетом, именно поэтому вся наша упаковка является
              биоразлагаемой, а вся наша продукция изготовлена из композитного
              материала на водной основе, который не содержит растворителей и
              летучих органических соединений, как обычные смолы.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;