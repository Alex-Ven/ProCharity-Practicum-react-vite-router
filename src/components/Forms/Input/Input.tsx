import React from 'react';
import './Input.scss';

export type InputType = 'text' | 'password' | 'email';

interface InputProps {
  id: string;
  type: InputType;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export const Input = ({
  id,
  type,
  value,
  onChange,
  label,
  placeholder = '',
  required = false,
  className = '',
}: InputProps) => {
  return (
    <div className={`input ${className}`}>
      {label && (
        <label htmlFor={id} className="input__label">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="input__field"
      />
    </div>
  );
};
