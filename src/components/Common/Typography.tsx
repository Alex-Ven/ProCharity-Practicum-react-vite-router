import React from 'react';

// Типы для вариантов текста (можно расширять по мере необходимости)
type TextVariant = 'bold' | 'italic' | 'uppercase' | 'lowercase' | 'capitalize' | 'center' | 'left' | 'right' | 'primary' | 'secondary';

const Title = ({ children }: { children: React.ReactNode }) => (
  <h1>{children}</h1>
);

const Text = ({ children }: { children: React.ReactNode }) => (
  <p>{children}</p>
);

// Добавляем компонент TextVariants с типами для variant
const TextVariants = ({ children, variant }: { children: React.ReactNode, variant: TextVariant }) => {
  const className = `text-${variant}`;
  return <p className={className}>{children}</p>;
};

export { Title, Text, TextVariants };
