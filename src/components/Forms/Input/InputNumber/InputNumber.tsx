import React from 'react';

const InputNumber = ({
  value,
  onChange,
  placeholder,
  className,
  min,
  max,
}: {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  min?: number;
  max?: number;
}) => {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input-number ${className}`}
      min={min}
      max={max}
    />
  );
};

export { InputNumber };
