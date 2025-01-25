import React from 'react';

interface InputDateProps {
  id: string;
  value: string; // Значение даты в формате строки
  onChange: (value: string) => void; // Принимает строку вместо ChangeEvent
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const InputDate: React.FC<InputDateProps> = ({
  id,
  value,
  onChange,
  label,
  placeholder,
  required,
  className,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Извлекаем значение даты из события и передаем его дальше
    onChange(e.target.value);
  };

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
        onChange={handleInputChange} // Используем обработчик изменений
        placeholder={placeholder}
        className="input-date"
        required={required}
      />
    </div>
  );
};

export { InputDate };
