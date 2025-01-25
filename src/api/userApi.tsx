// Тип данных пользователя
export interface User {
  id: number;
  name: string;
  email: string;
}

// Функция fetchUser
export async function fetchUser(): Promise<User | null> {
  try {
    const response = await fetch('/api/user');

    if (!response.ok) {
      console.error(`Ошибка загрузки: ${response.statusText}`);
      return null;
    }

    const data = (await response.json()) as User;
    if (data && typeof data.id === 'number' && typeof data.email === 'string') {
      return data;
    }

    console.error('Получены некорректные данные пользователя.');
    return null;
  } catch (error) {
    console.error('Ошибка при выполнении fetchUser:', error);
    return null;
  }
}

// Функция logoutUser
export async function logoutUser(): Promise<void> {
  try {
    const response = await fetch('/api/logout', { method: 'POST' });

    if (!response.ok) {
      console.error('Ошибка при разлогине:', response.statusText);
    }
  } catch (error) {
    console.error('Ошибка при выполнении logoutUser:', error);
  }
}

// Тип данных для авторизации
export interface LoginCredentials {
  email: string;
  password: string;
}

// Функция loginUser
export async function loginUser(
  credentials: LoginCredentials
): Promise<{ success: boolean; message?: string; user?: User }> {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      // Явно указываем тип для данных, возвращаемых из response.json()
      const user = (await response.json()) as User;
      return { success: true, user };
    }

    // Указываем ожидаемую структуру данных ошибки
    const error = (await response.json()) as { message: string };
    return {
      success: false,
      message: error.message || 'Ошибка авторизации',
    };
  } catch (err) {
    console.error('Ошибка при выполнении loginUser:', err);
    return {
      success: false,
      message: 'Ошибка подключения к серверу',
    };
  }
}



// Функция регистрации пользователя
export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export async function registerUser(
  credentials: RegisterCredentials
): Promise<{ success: boolean; message?: string }> {
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      return { success: true };
    }

    // Указываем ожидаемую структуру данных ошибки
    const error = (await response.json()) as { message: string };
    return {
      success: false,
      message: error.message || 'Ошибка регистрации',
    };
  } catch (err) {
    console.error('Ошибка при выполнении registerUser:', err);
    return {
      success: false,
      message: 'Ошибка подключения к серверу',
    };
  }
}
