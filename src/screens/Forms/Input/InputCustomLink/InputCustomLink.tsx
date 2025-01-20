import React from 'react';

const InputCustomLink = ({
  value,
  onChange,
  placeholder = 'Enter custom link',
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
      className={`input-custom-link ${className}`}
    />
  );
};

export { InputCustomLink };
