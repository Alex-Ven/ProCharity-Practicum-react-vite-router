import React from 'react';
import './Layout.scss';
import { Header, HeaderProps } from '../Layout/Header/Header';
import { Footer, FooterProps } from '../Layout/Footer/Footer'; // Импортируем Footer и его пропсы
import { ButtonLinkColor, ButtonLinkVariant } from '../Action/Link/Link';

interface LayoutProps {
  children: React.ReactNode;
  logoSrc?: string; // Логотип
  menuItems?: HeaderProps['menuItems']; // Пункты меню из HeaderProps
  actionButtons?: HeaderProps['actionButtons']; // Кнопки действия из HeaderProps
  footerProps?: FooterProps; // Пропсы для Footer
  sidebar?: React.ReactNode; // Сайдбар
  additionalContent?: React.ReactNode; // Дополнительный контент
}

// Устанавливаем дефолтные значения для menuItems, actionButtons и footerProps
const defaultMenuItems = [
  { label: 'Главная', href: '/' },
  { label: 'О проекте', href: '/about' },
  { label: 'Контакты', href: '/contact' },
];

const defaultActionButtons = [
  { label: 'Войти', href: '/login', color: 'orange' as ButtonLinkColor },
  { label: 'Регистрация', href: '/register', color: 'blue' as ButtonLinkColor, variant: 'bold' as ButtonLinkVariant },
];

const defaultFooterProps: FooterProps = {
  columns: [
    {
      title: 'О проекте',
      links: [
        { label: 'Новости', href: '/news' },
        { label: 'Документы', href: '/documents' },
      ],
    },
    {
      title: 'Контакты',
      links: [
        { label: 'Обратная связь', href: '/contact' },
        { label: 'Соцсети', href: '/social' },
      ],
    },
  ],
  bottomLinks: [
    { label: 'Политика конфиденциальности', href: '/privacy' },
    { label: 'Условия использования', href: '/terms' },
  ],
};

export const Layout: React.FC<LayoutProps> = ({
  children,
  logoSrc,
  menuItems = defaultMenuItems, // дефолтные значения для menuItems
  actionButtons = defaultActionButtons, // дефолтные значения для actionButtons
  footerProps = defaultFooterProps, // дефолтные значения для footerProps
  sidebar,
  additionalContent,
}) => {

  return (
    <div className="layout">
      {/* Header */}
      <Header logoSrc={logoSrc} menuItems={menuItems} actionButtons={actionButtons} />

      {/* Основной контент с сайдбаром */}
      <div className="layout__main">
        {sidebar && <aside className="layout__sidebar">{sidebar}</aside>}
        <main className="layout__content">{children}</main>
      </div>

      {/* Дополнительный контент */}
      {additionalContent && <div className="layout__additional">{additionalContent}</div>}

      {/* Footer */}
      <Footer
        columns={footerProps.columns}
        bottomLinks={footerProps.bottomLinks}
      />
    </div>
  );
};

export default Layout;