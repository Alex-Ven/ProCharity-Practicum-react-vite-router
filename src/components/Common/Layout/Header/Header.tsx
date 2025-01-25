import React from 'react';
import { Menu } from '../Menu/Menu'; // Импортируем компонент Menu
import { ButtonLink, ButtonLinkColor, ButtonLinkVariant } from '../../Action/Link/Link'; // Кнопка для ссылок
import './Header.scss';

// Тип для кнопок
type ActionButton = {
  label: string;
  href: string;
  color?: ButtonLinkColor;
  variant?: ButtonLinkVariant;
};

export type HeaderProps = {
  logoSrc?: string; // Пропс для изображения логотипа
  menuItems?: { label: string; href: string }[]; // Пропс для пунктов меню
  actionButtons?: ActionButton[]; // Пропс для кнопок действия
};

const ActionButtons = ({ buttons }: { buttons: ActionButton[] }) => (
  <div className="header__buttons">
    {buttons.map((button, index) => (
      <ButtonLink
        key={index}
        href={button.href}
        color={button.color} // Передаем цвет кнопки
        variant={button.variant} // Если нужно, передаем вариант кнопки (например, 'bold')
      >
        {button.label}
      </ButtonLink>
    ))}
    <div className="header__account">
      <div className="header__account-photo"></div>
      <div className="header__account-badge"></div>
    </div>
  </div>
);


export const Header = ({ logoSrc = '/default-logo.png', menuItems = [], actionButtons = [] }: HeaderProps) => {
  console.log('Header Props:', { menuItems, actionButtons });
  return (
    <header className="header">
      {/* Логотип */}
      <div className="header__logo">
        <a href="/">
          <img src={logoSrc} alt="Логотип" />
        </a>
      </div>

      {/* Навигация */}
      <nav className="header__navigation">
        <Menu items={menuItems}>
          {/* Передаем кнопки как детей в меню */}
          <ActionButtons buttons={actionButtons} />
        </Menu>
      </nav>
    </header>
  );
};
