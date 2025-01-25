import React from 'react';
import { useAnchor } from './AnchorProvider';
import './Anchor.scss';

// Тип для пропсов Anchor
type AnchorProps = {
  href?: string; // href для стандартного тега <a>
  to?: string;   // to для компонента Link из react-router-dom
  children: React.ReactNode;
  className?: string; // Дополнительные классы
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void; // Добавляем поддержку onClick
};

// Компонент Anchor, использующий контекст
const Anchor = ({ href, to, children, onClick, className }: AnchorProps) => {
  const AnchorTag = useAnchor(); // Получаем текущий компонент из контекста

  // Передаем все пропсы, включая href/to и onClick
  return (
    <AnchorTag
      href={href}
      to={to}
      onClick={onClick}
      className={`anchor ${className || ''}`}
    >
      {children}
    </AnchorTag>
  );
};

export { Anchor };
