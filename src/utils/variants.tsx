import React from 'react';

// Типы для HOC
type VariantProps = {
  type?: 'primary' | 'secondary' | 'outline'; // Определенные типы кнопок
  variant?: string; // Варианты (например, 'rounded', 'bold')
  color?: string; // Цветовые варианты
  className?: string; // Пользовательские классы
};

// HOC для добавления классов на основе пропсов
function withVariants<T extends VariantProps>(
  WrappedComponent: React.ComponentType<T>
) {
  const ComponentWithVariants = ({ type, variant, color, className, ...props }: T) => {
    // Генерация классов
    const typeClass = type ? `type-${type}` : '';
    const variantClass = variant ? `variant-${variant}` : '';
    const colorClass = color ? `color-${color}` : '';

    // Объединение всех классов
    const combinedClasses = [typeClass,
      variantClass,
      colorClass,
      className, // Пользовательские классы
    ]
      .filter(Boolean) // Убираем undefined или пустые значения
      .join(' ') // Объединяем классы в строку с пробелами

    return (
      <WrappedComponent
        {...(props as T)} // Передача остальных пропсов
        className={combinedClasses} // Применяем объединенные классы
      />
    );
  };

  // Устанавливаем displayName для HOC (для отладки)
  ComponentWithVariants.displayName = `WithVariants(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithVariants;
}

export { withVariants };
