import React, { useState } from 'react';
import { Button } from '../../components/Common/Action/Batton/Button';
import { Field } from '../Forms/Field'; // Импортируем Field
import { InputEmail } from './Input/InputEmail';
import { InputPassword } from './Input/InputPassword';
import { loginUser } from '../../api/loginApi';
import './LoginForm.scss';

export const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError('Все поля должны быть заполнены.');
      return;
    }

    setLoading(true);
    try {
      const response = await loginUser({ email, password });
      console.log('Response from API:', response);
      alert(response.message);
    } catch (err: unknown) {
      console.error('Ошибка авторизации:', err);
      const errorMessage =
        err instanceof Error ? err.message : 'Произошла ошибка при авторизации.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        void handleSubmit(e);
      }}
    >
      <h2 className="login-form__title">Вход в личный кабинет</h2>

      {/* Отображение ошибки */}
      {error && <p className="login-form__error">{error}</p>}

      {/* Поле для ввода email */}
      <Field label="Email">
        <InputEmail
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Электронная почта"
          required
        />
      </Field>

      {/* Поле для ввода пароля */}
      <Field label="Пароль">
        <InputPassword
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Пароль"
          required
        />
      </Field>

      <div className="login-form__submit-button">
        <Button type="primary" variant="rounded" disabled={loading}>
          {loading ? 'Вход...' : 'Войти'}
        </Button>
      </div>
    </form>
  );
};
