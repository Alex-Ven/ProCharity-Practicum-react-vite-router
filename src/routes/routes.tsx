import { RouteObject } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage'; // Убедитесь, что путь правильный
import { RegistrationPage } from '@/pages/RegistrationPage/RegistrationPage';

export const routes: RouteObject[] = [
  {
    path: '/', // Главный маршрут
    element: <HomePage />, // Здесь рендерится компонент `HomePage`
  },
  {
    path: '/register', // Страница регистрации
    element: <RegistrationPage/>,
  }
];
