import React from 'react';
import { Anchor } from '../../Anchor/Anchor'; // Используем компонент Anchor для ссылок
import { ButtonLink } from '../../Action/Link/Link'; // Кнопка для ссылок
import './Header.scss'; // Подключаем стили

const Menu = () => (
  <ul className="header__menu">
    <li>
      <Anchor href="/" className="header__menu-item">
        О проекте
      </Anchor>
    </li>
  </ul>
);

const ActionButtons = () => (
  <div className="header__buttons">
    {/* Кнопка "Войти" */}
    <ButtonLink href="/login" color="orange">
      Войти
    </ButtonLink>
    {/* Кнопка "Присоединиться" */}
    <ButtonLink href="/register" color="blue"
          variant="bold">
      Присоединиться
    </ButtonLink>
    {/* Блок аккаунта (аватар и бейдж) */}
    <div className="header__account">
      <div className="header__account-photo"></div>
      <div className="header__account-badge"></div>
    </div>
  </div>
);

export const Header = () => {
  return (
    <header className="header">
      {/* Логотип */}
      <div className="header__logo">
        <a href="/">
          <img src="/path/to/logo.png" alt="Логотип" />
        </a>
      </div>

      {/* Навигация */}
      <nav className="header__navigation">
        <Menu />
      </nav>

      {/* Кнопки действий */}
      <ActionButtons />
    </header>
  );
};
