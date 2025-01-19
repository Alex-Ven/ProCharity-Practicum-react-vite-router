import React, { useState } from 'react';
import { Button } from '../Common/Button';
import { InputEmail } from '../Forms/Input/InputEmail';
import { InputPassword } from './Input/InputPassword';
import { loginUser } from '../../api/loginApi'; // Импорт API
import './LoginForm.scss';

export const LoginForm = () => {
  const [email, setEmail] = useState<string>(''); // Тип явно указан
  const [password, setPassword] = useState<string>(''); // Тип явно указан
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Обработчик изменения email
  const handleEmailChange = (value: string) => {
    setEmail(value); // Гарантируем, что value — строка
  };

  // Обработчик изменения пароля
  const handlePasswordChange = (value: string) => {
    setPassword(value); // Гарантируем, что value — строка
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setError(null); // Сброс ошибки

    // Проверка на заполненность полей
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
    <form className="login-form" onSubmit={(e) => {
      void handleSubmit(e);
    }}
    >
      <h2 className="login-form__title">Вход в личный кабинет</h2>

      {/* Отображение ошибки */}
      {error && <p className="login-form__error">{error}</p>}

      {/* Поле для ввода email */}
      <InputEmail
        id="email"
        value={email}
        onChange={handleEmailChange} // Передаем обработчик с явным типом
        label="Email"
        placeholder="Электронная почта"
        required
      />

      {/* Поле для ввода пароля */}
      <InputPassword
        id="password"
        value={password}
        onChange={handlePasswordChange} // Передаем обработчик с явным типом
        label="Пароль"
        placeholder="Пароль"
        required
      />

      <div className="login-form__submit-button">
        <Button type="primary" variant="rounded" disabled={loading}>
          {loading ? 'Вход...' : 'Войти'}
        </Button>
      </div>
      </form>
  );
};
