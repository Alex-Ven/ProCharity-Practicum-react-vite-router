import React from 'react';

interface InputDateProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const InputDate = ({
  id,
  value,
  onChange,
  label,
  placeholder,
  required,
  className,
}: InputDateProps) => {
  return (
    <div className={`input-date-wrapper ${className || ''}`}>
      {label && (
        <label htmlFor={id} className="input-date-label">
          {label}
          {required && <span className="input-date-required">*</span>}
        </label>
      )}
      <input
        id={id}
        type="date"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-date"
      />
    </div>
  );
};

export { InputDate };
