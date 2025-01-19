import React from 'react';

const InputNumber = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  className,
  min,
  max,
  required,
}: {
  id?: string; // Уникальный идентификатор
  label?: string; // Метка для поля ввода
  value: number; // Значение
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Обработчик изменений
  placeholder?: string; // Заполнитель
  className?: string; // Дополнительные классы
  min?: number; // Минимальное значение
  max?: number; // Максимальное значение
  required?: boolean; // Обязательность поля
}) => {
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
        value={isNaN(value) ? '' : value} // Если значение NaN, показываем пустую строку
        onChange={onChange}
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
