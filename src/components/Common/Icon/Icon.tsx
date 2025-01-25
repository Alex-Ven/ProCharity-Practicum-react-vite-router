import React from 'react';

// Карта иконок (можно добавлять новые иконки по мере необходимости)
const iconMap: { [key: string]: string } = {
  home: '/assets/icons/home.svg',
  search: '/assets/icons/search.svg',
  user: '/assets/icons/user.svg',
};


type IconProps = {
  name: string; 
  width?: string; 
  height?: string; 
  className?: string; 
};

export const Icon = ({ name, width = '24px', height = '24px', className = '' }: IconProps) => {
  // Получаем путь к иконке по имени
  const iconPath = iconMap[name];

  if (!iconPath) {
    return <span>Иконка не найдена</span>; // Если иконка не найдена
  }

  return (
    <img
      src={iconPath}
      alt={name}
      width={width}
      height={height}
      className={className}
    />
  );
};
