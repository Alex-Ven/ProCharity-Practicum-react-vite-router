import React from 'react';

interface InputNumberProps {
  id?: string; // Уникальный идентификатор
  label?: string; // Метка для поля ввода
  value: string; // Значение (как строка, чтобы поддерживать формат телефона)
  onChange: (value: string) => void; // Обработчик изменений, принимает строку
  placeholder?: string; // Заполнитель
  className?: string; // Дополнительные классы
  min?: number; // Минимальное значение
  max?: number; // Максимальное значение
  required?: boolean; // Обязательность поля
}

const InputNumber: React.FC<InputNumberProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  className,
  min,
  max,
  required,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Вызываем `onChange`, передавая только значение поля ввода
    onChange(e.target.value);
  };

  return (
    <div className={`input-number-wrapper ${className || ''}`}>
      {/* Если передан label, отображаем его */}
      {label && (
        <label htmlFor={id} className="input-number-label">
          {label} {required && <span className="input-number-required">*</span>}
        </label>
      )}
      <input
        id={id}
        type="text"
        value={value} // Значение передается как строка
        onChange={handleInputChange}
        placeholder={placeholder}
        className="input-number"
        min={min}
        max={max}
        required={required}
      />
    </div>
  );
};

export { InputNumber };
