import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для навигации
import { Anchor } from '../../Anchor/Anchor'; // Используем компонент Anchor для ссылок
import { Button, ButtonLink } from '../../Button'; // Используем кнопку
import { Modal } from '../../../../containers/Modal/Modal'; // Компонент модального окна
import { LoginForm } from '../../../Forms/LoginForm'; // Компонент формы входа
import './Header.scss'; // Подключаем стили

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="header">
      {/* Логотип */}
      <div className="header__logo"></div>

      {/* Навигация */}
      <nav className="header__navigation">
        <ul className="header__menu">
          <li>
            <Anchor href="/" className="header__menu-item">
              О проекте
            </Anchor>
          </li>
          
          <li>
            {/* Открытие модального окна для входа */}
            <Anchor
              href="#"
              className="header__menu-item"
              onClick={(e) => {
                e.preventDefault(); // Предотвращаем переход по ссылке
                openModal();
              }}
            >
              Войти
            </Anchor>
          </li>
        </ul>
      </nav>

      {/* Кнопки действий и аккаунт */}
      <div className="header__buttons">
        {/* Кнопка с клиентской навигацией */}
        
  <ButtonLink href="/register" className="header__action-button">
    Присоединиться
  </ButtonLink>


        {/* Блок аккаунта */}
        <div className="header__account">
          <div className="header__account-photo"></div>
          <div className="header__account-badge"></div>
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <LoginForm />
        </Modal>
      )}
    </header>
  );
};
