import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { fetchUser, logoutUser, User } from '../../api/userApi';

// Тип ответа Action
interface ActionResponse {
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

        if (actionType === 'logout') {
            await logoutUser();
            return { success: true };
        }

        return { error: 'Неизвестное действие.' };
    } catch (error) {
        console.error('Ошибка в action:', error);
        return { error: 'Произошла ошибка при выполнении действия.' };
    }
}

// Лениво загружаем компонент HomePage
const LazyHomePage = lazy(() =>
    import('./HomePage.screen').then(module => ({
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
    path: "/",
    loader,
    action,
    element: <HomePageWrapper />,
};