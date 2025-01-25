// Тип для данных формы авторизации
export interface LoginFormData {
  email: string;
  password: string;
}

// Тип для ответа от сервера
export interface MockLoginResponse {
  success: boolean;
  message: string;
  token?: string; // Токен авторизации (если успешно)
}

// Моковая функция для входа пользователя
export const loginUser = (formData: LoginFormData): Promise<MockLoginResponse> => {
  console.log('Авторизация данных отправлена на сервер:', formData);

  return new Promise((resolve) => {
    setTimeout(() => {
      if (formData.email === 'test@example.com' && formData.password === 'password123') {
        resolve({
          success: true,
          message: 'Авторизация прошла успешно!',
          token: 'fake-jwt-token',
        });
      } else {
        resolve({
          success: false,
          message: 'Неверный email или пароль.',
        });
      }
    }, 1000); // Задержка в 1 секунду
  });
};
