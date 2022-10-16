import React from 'react';
import Collapse from "@components/UI/Collapse";

const Faq = () => {
  const questions = [
    {
      question: 'Как оформить заказ?',
      answer:
        'Напишите нам в любой удобный для вас мессенджер и наш менеджер оформит заказ и доставку',
    },
  ]

  return (
    <section className="py-6 sm:py-8 lg:py-12">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-semibold text-center mb-4 md:mb-6">
            Часто задаваемые вопросы
          </h2>
          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            Здесь вы найдете ответы на самые популярные вопросы
          </p>
        </div>

        <div className="flex flex-col max-w-screen-sm border-t mx-auto">
          {questions.map((item, i) => (
            <Collapse key={i} title={item.question} body={item.answer}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;