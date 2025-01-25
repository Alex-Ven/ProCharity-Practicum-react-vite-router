import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { routes as publicRoutes } from '@/routes/routes';

function LayoutWrapper() {
	return (
			<Outlet />
	);
}

const router = createBrowserRouter([
	{
		element: <LayoutWrapper />, // Глобальная обертка для всех маршрутов
		errorElement: <div>Ошибка 404: Страница не найдена</div>, // Обработка ошибок маршрутизации
		children: publicRoutes,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
