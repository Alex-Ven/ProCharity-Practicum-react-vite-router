import React from 'react';
import './Card.scss';

type CardProps = {
  children: React.ReactNode;
  variant?: string; // Вариант карточки, например 'login', 'secondary'
  className?: string; // Дополнительный класс, если нужен
};

const Card = ({ children, variant = '', className = '' }: CardProps) => {
  const cardClass = `card ${variant ? `card-${variant}` : ''} ${className}`.trim();
  return <div className={cardClass}>{children}</div>;
};

export default Card;
