import React from 'react';

interface InputLinkProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const InputLink = ({
  id,
  value,
  onChange,
  label,
  placeholder,
  required,
  className,
}: InputLinkProps) => {
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
        onChange={onChange}
        placeholder={placeholder}
        className="input-link"
      />
    </div>
  );
};

export { InputLink };
