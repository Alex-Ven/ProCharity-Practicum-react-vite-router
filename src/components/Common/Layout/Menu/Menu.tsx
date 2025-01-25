import React from 'react';
import { Anchor } from '../../Anchor/Anchor'; 

type MenuItem = {
  label: string;
  href: string;
};

type MenuProps = {
  items: MenuItem[]; // Для обычных пунктов меню
  children?: React.ReactNode; // Для передачи дополнительных элементов (например, кнопок или других компонентов)
};

export const Menu = ({ items, children }: MenuProps) => (
  <ul className="header__menu">
    {items.map((item, index) => (
      <li key={index}>
        <Anchor href={item.href} className="header__menu-item">
          {item.label}
        </Anchor>
      </li>
    ))}
    {children && (
      <li className="header__menu-item">
        {children}
      </li>
    )}
  </ul>
);
