import React from 'react';

interface InputCityProps {
  id: string;
  value: string; // Значение должно быть строкой
  onChange: (value: string) => void; // Принимает строку вместо ChangeEvent
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const InputCity: React.FC<InputCityProps> = ({
  id,
  value,
  onChange,
  label,
  placeholder,
  required,
  className,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Вызываем `onChange`, передавая только значение поля ввода
    onChange(e.target.value);
  };

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
        onChange={handleInputChange} // Используем обработчик изменений
        placeholder={placeholder}
        className="input-city"
        required={required}
      />
    </div>
  );
};

export { InputCity };
