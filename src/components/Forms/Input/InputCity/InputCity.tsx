import React from 'react';

const InputCity = ({
  value,
  onChange,
  placeholder = 'Enter city',
  className,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input-city ${className}`}
    />
  );
};

export { InputCity };
