import React, { createContext, useContext } from 'react';

// Типы для пропсов Anchor
type AnchorProps = {
  href?: string; // Для стандартного <a>
  to?: string;   // Для Link из react-router-dom
  children: React.ReactNode;
  className?: string; // Дополнительные классы
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void; // Обработчик клика
};

// Тип для компонента, передаваемого в провайдер
type AnchorTag = React.ComponentType<AnchorProps>;

// Создание контекста с дефолтным значением
const AnchorContext = createContext<AnchorTag>((props) => <a {...props} />);

// Хук для использования контекста Anchor
const useAnchor = () => useContext(AnchorContext);

// Провайдер контекста Anchor
const AnchorProvider = ({
  children,
  tag,
}: {
  children: React.ReactNode;
  tag: AnchorTag;
}) => {
  return (
    <AnchorContext.Provider value={tag}>{children}</AnchorContext.Provider>
  );
};

export { AnchorProvider, useAnchor };
