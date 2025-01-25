import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs } from 'react-router';
import { registerUser } from '../../api/userApi';

// Тип данных для ответа
export interface ActionResponse {
	success?: boolean;
	error?: string;
}

// Экшен: обработка данных регистрации
async function action({
	request,
}: ActionFunctionArgs): Promise<ActionResponse> {
	const formData = await request.formData();
	const name = formData.get('name') as string | null;
	const email = formData.get('email') as string | null;
	const password = formData.get('password') as string | null;

	if (name && email && password) {
		const result = await registerUser({ name, email, password });
		if (result.success) {
			return { success: true };
		}
		return { error: result.message || 'Ошибка регистрации.' };
	}

	return { error: 'Пожалуйста, заполните все поля.' };
}

// Lazy-загрузка компонента экрана
const LazyRegistrationPage = lazy(() =>
	import('./RegistrationPage').then((module) => ({
		default: module.RegistrationPage,
	}))
);

const RegistrationPageWrapper = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
	<Suspense fallback={<div>Загрузка...</div>}>
		<LazyRegistrationPage {...props} />
	</Suspense>
);

// Экспорт роута для регистрации
export default {
	action,
	element: <RegistrationPageWrapper />,
};
