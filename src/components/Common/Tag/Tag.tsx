import React from 'react';
import './Tag.scss';

type TagProps = {
  label: string; // Текст внутри тега
  variant?: 'primary' | 'outline' | 'views' | 'diamond'; // Возможные варианты
};

const Tag = ({ label, variant = 'primary' }: TagProps) => {
  return <span className={`tag ${variant}-tag`}>{label}</span>;
};

export { Tag };
