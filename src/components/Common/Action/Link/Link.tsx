import React from 'react';
import './Link.scss';
import { withVariants } from '../../../../utils/variants';

// Типы для ссылок
export type ButtonLinkVariant = 'normal' | 'bold';
export type ButtonLinkColor = 'blue' | 'orange';

export type ButtonLinkProps = {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonLinkVariant;
  color?: ButtonLinkColor;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

// Базовый компонент ссылки
const ButtonLinkBase = ({
  href,
  children,
  className = '',
  disabled = false,
  onClick,
}: ButtonLinkProps) => {
  const baseClass = `button-link ${className} ${disabled ? 'disabled' : ''}`;

  // Если кнопка отключена
  if (disabled) {
    if (onClick) {
      return (
        <button
          className={baseClass}
          onClick={onClick}
          disabled
          aria-disabled="true"
          type="button"
        >
          {children}
        </button>
      );
    }

    return (
      <a className={baseClass} aria-disabled="true" tabIndex={-1}>
        {children}
      </a>
    );
  }

  // Если передан onClick, возвращаем кнопку
  if (onClick) {
    return (
      <button className={baseClass} onClick={onClick} type="button">
        {children}
      </button>
    );
  }

  // Если передан href, возвращаем ссылку
  return (
    <a href={href} className={baseClass}>
      {children}
    </a>
  );
};

// Оборачиваем базовый компонент в HOC для добавления стилей
const ButtonLink = withVariants(ButtonLinkBase);

// Специализированные ссылки
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

export { ButtonLink, GoToLink, ShowMoreLink, AddLink };
