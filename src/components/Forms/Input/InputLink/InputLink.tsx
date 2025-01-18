import React from 'react';

const InputLink = ({
  value,
  onChange,
  placeholder = 'Enter link',
  className,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}) => {
  return (
    <input
      type="url"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input-link ${className}`}
    />
  );
};

export { InputLink };
