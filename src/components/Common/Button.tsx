import React from 'react';

// Типы кнопок
export type ButtonType = 'primary' | 'secondary' | 'outline'; // Возможные типы кнопок
export type ButtonVariant = 'rounded' | 'square'; // Варианты формы кнопки
export type ButtonLinkVariant = 'normal' | 'bold'; // Варианты стиля ссылки
export type ButtonLinkColor = 'blue' | 'red' | 'green'; // Цвета ссылок

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
  const baseStyle = `px-4 py-2 text-white font-semibold ${
    variant === 'rounded' ? 'rounded-full' : 'rounded'
  }`;
  const typeStyle =
    type === 'primary'
      ? 'bg-blue-500 hover:bg-blue-600'
      : type === 'secondary'
      ? 'bg-gray-500 hover:bg-gray-600'
      : 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white';

  return (
    <button onClick={onClick} className={`${baseStyle} ${typeStyle} ${className}`}>
      {children}
    </button>
  );
};

// Кнопка с обводкой
const ButtonOutline = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white ${className}`}
    >
      {children}
    </button>
  );
};

// Кнопка-ссылка
const ButtonLink = ({ href, children, variant = 'normal', color = 'blue', className }: ButtonLinkProps) => {
  const baseStyle = 'inline-block px-4 py-2 text-center font-semibold';
  const variantStyle = variant === 'bold' ? 'font-bold' : 'font-normal';
  const colorStyle =
    color === 'blue'
      ? 'text-blue-500 hover:underline'
      : color === 'red'
      ? 'text-red-500 hover:underline'
      : 'text-green-500 hover:underline';

  return (
    <a href={href} className={`${baseStyle} ${variantStyle} ${colorStyle} ${className}`}>
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
  <ButtonLink href={href} variant="normal" color="green">
    {children}
  </ButtonLink>
);

const AddLink = ({ href, children }: ButtonLinkProps) => (
  <ButtonLink href={href} variant="bold" color="red">
    {children}
  </ButtonLink>
);

// Экспорт компонентов
export {
  Button,
  ButtonOutline,
  ButtonLink,
  GoToLink,
  ShowMoreLink,
  AddLink
};
