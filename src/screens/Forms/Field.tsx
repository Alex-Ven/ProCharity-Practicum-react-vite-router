import React from 'react';
import './Field.scss';

type FieldProps = {
  label: string;
  children: React.ReactNode;
  className?: string; // Позволяет добавлять дополнительные классы
};

export const Field: React.FC<FieldProps> = ({ label, children, className }) => (
  <div className={`field ${className || ''}`.trim()}>
    <label className="field__label">{label}</label>
    {children}
  </div>
);
