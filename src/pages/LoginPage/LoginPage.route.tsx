import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { fetchUser, loginUser, User } from '../../api/userApi';

interface ActionResponse {
  success?: boolean;
  error?: string;
}

// Лоадер: заглушка, если потребуется загрузить данные
async function loader({ request }: LoaderFunctionArgs): Promise<User | null> {
  return await fetchUser();
}

// Экшен: обработка авторизации
async function action({ request }: ActionFunctionArgs): Promise<ActionResponse> {
  const formData = await request.formData();
  const email = formData.get('email') as string | null;
  const password = formData.get('password') as string | null;

  if (email && password) {
    const result = await loginUser({ email, password });
    if (result.success) {
      return { success: true };
    }
    return { error: 'Неправильные учетные данные.' };
  }

  return { error: 'Пожалуйста, заполните все поля.' };
}

// Lazy-загрузка компонента экрана
const LazyLoginPage = lazy(() =>
  import('./LoginPage.screen').then(module => ({
    default: module.LoginPage,
  }))
);

const LoginPageWrapper = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={<div>Загрузка...</div>}>
    <LazyLoginPage {...props} />
  </Suspense>
);

export default {
  path: "/login",
  loader,
  action,
  element: <LoginPageWrapper />,
};
