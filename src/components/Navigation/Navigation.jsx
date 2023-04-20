import React, { useState } from 'react';
import menu from './img/menu.png';
import close from './img/close.png';
import classNames from 'classnames';

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="nav">
      <img
        src={menu}
        alt="nemu"
        className="nav__menuOpen"
        onClick={handleMenuOpen}
      />

      <div className={classNames("nav__menu", {
        "nav__menu--open": menuOpen,
      })}>
        <img
          src={close}
          alt="close"
          className="nav__menuClose"
          onClick={handleMenuOpen}
        />

        <a href="/" className="nav__link">Главная</a>
        <a href="/" className="nav__link">Информация о тесте</a>

        <button
          type="button"
          className="nav__button"
        >
          пройти тест
        </button>
      </div>
    </nav>
  );
};

