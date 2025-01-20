import React from 'react';
import { withVariants } from '../../../../utils/variants';
import './Button.scss';

// Типы для кнопок
export type ButtonType = 'primary' | 'secondary' | 'outline';
export type ButtonVariant = 'rounded' | 'square';

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  type?: ButtonType;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
};

// Базовый компонент кнопки
const ButtonBase = ({
  onClick,
  children,
  className,
  disabled = false,
}: ButtonProps) => (
  <button
    onClick={!disabled ? onClick : undefined}
    className={`button ${className || ''}`}
    disabled={disabled}
  >
    {children}
  </button>
);

// Оборачиваем через HOC
const Button = withVariants(ButtonBase);

// Компонент для кнопки с обводкой
const ButtonOutline = ({
  onClick,
  children,
  className,
  disabled = false,
}: ButtonProps) => (
  <button
    onClick={!disabled ? onClick : undefined}
    className={`button outline ${className || ''}`}
    disabled={disabled}
  >
    {children}
  </button>
);

export { Button, ButtonOutline };
