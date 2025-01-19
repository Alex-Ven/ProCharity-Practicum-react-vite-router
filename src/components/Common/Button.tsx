import React from 'react';
import './Button.scss';

// Типы кнопок
export type ButtonType = 'primary' | 'secondary' | 'outline'; // Возможные типы кнопок
export type ButtonVariant = 'rounded' | 'square'; // Варианты формы кнопки
export type ButtonLinkVariant = 'normal' | 'bold'; // Варианты стиля ссылки
export type ButtonLinkColor = 'blue' | 'orange'; // Цвета ссылок

// Пропсы для обычных кнопок
type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  type?: ButtonType;
  variant?: ButtonVariant;
  className?: string; // Дополнительные стили
};

// Пропсы для ссылок
type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonLinkVariant;
  color?: ButtonLinkColor;
  className?: string; // Дополнительные стили
};

// Обычная кнопка
const Button = ({ onClick, children, type = 'primary', variant = 'rounded', className }: ButtonProps) => {
  const typeClass = type === 'primary' ? 'primary' : type === 'secondary' ? 'secondary' : 'outline';
  const variantClass = variant === 'rounded' ? 'rounded' : 'square';

  return (
    <button onClick={onClick} className={`button ${typeClass} ${variantClass} ${className || ''}`}>
      {children}
    </button>
  );
};

// Кнопка с обводкой
const ButtonOutline = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`button outline ${className || ''}`}>
      {children}
    </button>
  );
};

// Кнопка-ссылка
const ButtonLink = ({ href, children, variant = 'normal', color = 'blue', className }: ButtonLinkProps) => {
  const colorClass = color === 'blue' ? 'link-blue' : 'link-orange';
  const variantClass = variant === 'bold' ? 'link-bold' : 'link-normal';

  return (
    <a href={href} className={`button-link ${colorClass} ${variantClass} ${className || ''}`}>
      {children}
    </a>
  );
};

// Специализированные кнопки/ссылки
const GoToLink = ({ href, children }: ButtonLinkProps) => (
  <ButtonLink href={href} variant="bold" color="blue">
    {children}
  </ButtonLink>
);

const ShowMoreLink = ({ href, children }: ButtonLinkProps) => (
  <ButtonLink href={href} variant="normal" color="orange">
    {children}
  </ButtonLink>
);

const AddLink = ({ href, children }: ButtonLinkProps) => (
  <ButtonLink href={href} variant="bold" color="orange">
    {children}
  </ButtonLink>
);

// Экспорт компонентов
export { Button, ButtonOutline, ButtonLink, GoToLink, ShowMoreLink, AddLink };
