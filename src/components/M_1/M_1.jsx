import React from 'react';

export const M_1 = () => {
  return (
    <div className="m1">
      <p className="m1__subtitle">
        Пройдите точный и быстрый
      </p>

      <h1 className="m1__title">
        тест на
        <br />
        определение IQ
      </h1>

      <button type="button" className="m1__button">
        пройти тест
      </button>

      <p className="m1__text m1__text--1">
        И получите рекомендации по развитию своего интеллекта
      </p>
      <p className="m1__text m1__text--2">
        и улучшению финансового благосостояния и личной жизни
      </p>

      <a href='/' className="m1__link" data-text="Подробнее"> </a>
    </div>
  );
};
