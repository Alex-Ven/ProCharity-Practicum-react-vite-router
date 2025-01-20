import React from 'react';

interface InputLinkProps {
  id: string;
  value: string; // Значение ссылки
  onChange: (value: string) => void; // Принимает строку вместо ChangeEvent
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const InputLink: React.FC<InputLinkProps> = ({
  id,
  value,
  onChange,
  label,
  placeholder,
  required,
  className,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Передаем только значение
    onChange(e.target.value);
  };

  return (
    <div className={`input-link-wrapper ${className || ''}`}>
      {label && (
        <label htmlFor={id} className="input-link-label">
          {label}
          {required && <span className="input-link-required">*</span>}
        </label>
      )}
      <input
        id={id}
        type="url"
        value={value}
        onChange={handleInputChange} // Обработчик изменений
        placeholder={placeholder}
        className="input-link"
        required={required}
      />
    </div>
  );
};

export { InputLink };
