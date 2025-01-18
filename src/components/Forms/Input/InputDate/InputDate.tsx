import React from 'react';

const InputDate = ({
  value,
  onChange,
  className,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) => {
  return (
    <input
      type="date"
      value={value}
      onChange={onChange}
      className={`input-date ${className}`}
    />
  );
};

export { InputDate };
