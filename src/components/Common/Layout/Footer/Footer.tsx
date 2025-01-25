import React from 'react';
import './Footer.scss';

// Тип для ссылок
type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[]; // Ссылки, которые будут в колонке
};

// Пропсы для Footer
export type FooterProps = {
  columns?: FooterColumn[]; // Пропс для колонок футера
  bottomLinks?: FooterLink[]; // Ссылки для нижней части футера
};

export const Footer = ({ columns = [], bottomLinks = [] }: FooterProps) => {
  console.log('Footer Props:', { columns, bottomLinks });
  return (
    <footer className="footer">
      <div className="footer__container">
        {columns.map((column, index) => (
          <div key={index} className="footer__column">
            <h3 className="footer__title">{column.title}</h3>
            <nav className="footer__nav">
              {column.links.map((link, linkIndex) => (
                <a key={linkIndex} href={link.href} className="footer__link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <p className="footer__text">© 2025 Моя платформа. Все права защищены.</p>
        <nav className="footer__bottom-nav">
          {bottomLinks.map((link, index) => (
            <a key={index} href={link.href} className="footer__link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
