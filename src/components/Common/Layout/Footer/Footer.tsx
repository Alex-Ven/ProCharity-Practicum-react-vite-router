import React from 'react';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Колонка 1: О проекте */}
        <div className="footer__column">
          <h3 className="footer__title">О проекте</h3>
          <nav className="footer__nav">
            <a href="/news" className="footer__link">Новости</a>
            <a href="/documents" className="footer__link">Документы</a>
            <a href="/contact" className="footer__link">Контакты</a>
          </nav>
        </div>

        {/* Колонка 2: Задания */}
        <div className="footer__column">
          <h3 className="footer__title">Задания</h3>
          <nav className="footer__nav">
            <a href="/tasks/in-progress" className="footer__link">В работе</a>
            <a href="/tasks/waiting" className="footer__link">Ждут исполнителей</a>
            <a href="/tasks/archive" className="footer__link">Архив</a>
          </nav>
        </div>

        {/* Колонка 3: Справочная информация */}
        <div className="footer__column">
          <h3 className="footer__title">Справочная информация</h3>
          <nav className="footer__nav">
            <a href="/help/how-to-help" className="footer__link">Как помочь</a>
            <a href="/help/how-to-get-help" className="footer__link">Как получить помощь</a>
						<a href="/help" className="footer__link">Контакты</a>
          </nav>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__text">© 2025 Моя платформа. Все права защищены.</p>
        <nav className="footer__bottom-nav">
          <a href="/privacy" className="footer__link">Политика конфиденциальности</a>
          <a href="/terms" className="footer__link">Условия использования</a>
        </nav>
      </div>
    </footer>
  );
};
