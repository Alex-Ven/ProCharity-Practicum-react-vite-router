import React, { useState } from 'react';
import { Button } from '../Common/Button';
import { InputEmail } from '../Forms/Input/InputEmail';
import './LoginForm.scss';
import { InputPassword } from './Input/InputPassword';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-form__title">Вход в личный кабинет</h2>

      {/* Поле для ввода email */}
      <InputEmail
        id="email"
        value={email}
        onChange={setEmail}
        label="Email"
        placeholder="Электронная почта"
        required
      />

      {/* Поле для ввода пароля */}
      <InputPassword
        id="password"
        value={password}
        onChange={setPassword}
        label="Пароль"
        placeholder="Пароль"
        required
      />

      <div className="login-form__submit-button">
        <Button
          type="primary"
          variant="rounded"
          onClick={() => {
            const fakeEvent = { preventDefault: () => {} } as React.FormEvent;
            handleSubmit(fakeEvent);
          }}
        >
          Войти
        </Button>
      </div>
    </form>
  );
};
