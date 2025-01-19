import React from 'react';

interface InputCityProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const InputCity = ({
  id,
  value,
  onChange,
  label,
  placeholder,
  required,
  className,
}: InputCityProps) => {
  return (
    <div className={`input-city-wrapper ${className || ''}`}>
      {label && (
        <label htmlFor={id} className="input-city-label">
          {label}
          {required && <span className="input-city-required">*</span>}
        </label>
      )}
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-city"
      />
    </div>
  );
};

export { InputCity };
