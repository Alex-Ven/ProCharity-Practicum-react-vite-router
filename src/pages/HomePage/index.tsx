import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { fetchUser, loginUser, User } from '../../api/userApi';

// Тип ответа Action
export interface ActionResponse {
    success?: boolean;
    error?: string;
}

// Лоадер: получает данные пользователя
async function loader({ request }: LoaderFunctionArgs): Promise<User | null> {
    try {
        return await fetchUser();
    } catch (error) {
        console.error('Ошибка в loader:', error);
        return null; 
    }
}

// Экшен: обработка действий
async function action({ request }: ActionFunctionArgs): Promise<ActionResponse> {
    try {
        const formData = await request.formData();
        const actionType = formData.get('action') as string | null;

        if (actionType === 'login') {
            // Получаем данные из формы
            const email = formData.get('email') as string;
            const password = formData.get('password') as string;

            // Выполняем логин
            const loginResult = await loginUser({ email, password });

            if (loginResult.success) {
                return { success: true };
            } else {
                return { error: loginResult.message || 'Не удалось войти' };
            }
        }

        return { error: 'Неизвестное действие.' };
    } catch (error) {
        console.error('Ошибка в action:', error);
        return { error: 'Произошла ошибка при выполнении действия.' };
    }
}

// Лениво загружаем компонент HomePage
const LazyHomePage = lazy(() =>
    import('./HomePage').then(module => ({
        default: module.HomePage,
    }))
);

// Компонент-обертка для обработки загрузки
const HomePageWrapper: React.FC = (props) => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <LazyHomePage {...props} />
    </Suspense>
);

// Экспортируем объект с маршрутом
export default {
    loader,
    action,
    element: <HomePageWrapper />,
};
