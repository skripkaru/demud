import React from 'react';

const Advantages = () => {
  const advantages = [
    {
      icon: 'check',
      title: 'Ручная работа',
      body: 'Все изделия изготавливаются вручную, что делает их эксклюзивными и поистине уникальными',
    },
    {
      icon: 'check',
      title: 'Эко материал',
      body: 'Мы работаем только с гипоаллергенным и не токсичным материалом',
    },
    {
      icon: 'check',
      title: 'Быстрая доставка',
      body: 'Мы осуществляем доставку в любую точку России',
    },
  ]

  return (
    <section className="py-6 sm:py-8 lg:py-12">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-semibold text-center mb-4 md:mb-6">
            Преимущества
          </h2>
          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            Совершая покупки у нас, вы в надежных руках
          </p>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
          {advantages.map((item, i) => (
            <div className="flex gap-4 md:gap-6" key={i}>
              <div
                className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-teal-500 text-white rounded shadow-lg">
                <svg className="icon w-5 h-5">
                  <use xlinkHref={`#${item.icon}`}></use>
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 mb-2">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;