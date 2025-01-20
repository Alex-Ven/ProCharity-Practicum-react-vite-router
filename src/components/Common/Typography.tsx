import React from 'react';
import { useTranslation } from 'react-i18next'; // Импортируем хук useTranslation

// Типы для вариантов текста
type TextVariant =
  | 'bold'
  | 'italic'
  | 'uppercase'
  | 'lowercase'
  | 'capitalize'
  | 'center'
  | 'left'
  | 'right'
  | 'primary'
  | 'secondary';

// Список допустимых ключей переводов
type TranslationKeys =
  | 'demo.welcomeUser'
  | 'demo.logIn'
  | 'demo.logOut'
  | 'demo.signUp'
  | 'main.title'
  | 'main.description'
  | 'main.applyVolunteer'
  | 'main.volunteerMotivation'
  | 'main.applyFund'
  | 'main.fundMotivation';

// Пропсы для компонента Title
type TitleProps = {
  value: TranslationKeys; // Тип ключа перевода
  className?: string; // Дополнительные классы
};

// Пропсы для компонента Text
type TextProps = {
  value: TranslationKeys; // Тип ключа перевода
  className?: string; // Дополнительные классы
};

// Пропсы для компонента TextVariants
type TextVariantsProps = {
  value: TranslationKeys; // Тип ключа перевода
  variant: TextVariant; // Вариант текста
  className?: string; // Дополнительные классы
};

// Компонент Title
const Title = ({ value, className }: TitleProps) => {
  const { t } = useTranslation();
  return <h1 className={className}>{t(value)}</h1>;
};

// Компонент Text
const Text = ({ value, className }: TextProps) => {
  const { t } = useTranslation();
  return <p className={className}>{t(value)}</p>;
};

// Компонент TextVariants
const TextVariants = ({ value, variant, className }: TextVariantsProps) => {
  const { t } = useTranslation();
  const variantClass = `text-${variant}`;
  return <p className={`${variantClass} ${className || ''}`}>{t(value)}</p>;
};

export { Title, Text, TextVariants };
