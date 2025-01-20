import { RouteObject } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage'; // Убедитесь, что путь правильный
import { RegistrationPage } from '@/pages/RegistrationPage/RegistrationPage'; // Страница регистрации
import { LoginPage } from '@/pages/LoginPage/LoginPage'; // Импорт страницы входа

export const routes: RouteObject[] = [
  {
    path: '/', // Главный маршрут
    element: <HomePage />, // Здесь рендерится компонент `HomePage`
  },
  {
    path: '/register', // Страница регистрации
    element: <RegistrationPage />,
  },
  {
    path: '/login', // Страница входа
    element: <LoginPage />,
  },
];
