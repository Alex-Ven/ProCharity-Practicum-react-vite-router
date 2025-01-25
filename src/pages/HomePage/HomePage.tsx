import React, { useState } from 'react';
import { Layout } from '../../components/Common/Layout/Layout';
import { Section } from '../../components/Common/Layout/Section';
import { Modal } from '../../containers/Modal/Modal';
import { LoginForm } from '../../screens/Forms/LoginForm';
import { RegistrationForm } from '../../screens/Forms/RegistrationForm';
import {
	ButtonLink,
	ButtonLinkColor,
	ButtonLinkVariant,
} from '../../components/Common/Action/Link/Link'; 

export const HomePage = () => {
	const [isLoginOpen, setLoginOpen] = useState(false);
	const [isRegisterOpen, setRegisterOpen] = useState(false);

	const headerMenuItems = [
		{ label: 'Главная', href: '/' },
		{ label: 'О проекте', href: '/about' },
		{ label: 'Контакты', href: '/contact' },
	];

	const headerActionButtons = [
		{ label: 'Войти', href: '/login', color: 'orange' as ButtonLinkColor },
		{
			label: 'Присоединиться',
			href: '/register',
			color: 'blue' as ButtonLinkColor,
			variant: 'bold' as ButtonLinkVariant,
		},
	];

	const footerColumns = [
		{
			title: 'О проекте',
			links: [
				{ label: 'Новости', href: '/news' },
				{ label: 'Документы', href: '/documents' },
			],
		},
		{
			title: 'Контакты',
			links: [
				{ label: 'Обратная связь', href: '/contact' },
				{ label: 'Соцсети', href: '/social' },
			],
		},
	];

	const footerBottomLinks = [
		{ label: 'Политика конфиденциальности', href: '/privacy' },
		{ label: 'Условия использования', href: '/terms' },
	];

	return (
		<Layout
			logoSrc="/path/to/logo.png"
			menuItems={headerMenuItems}
			actionButtons={headerActionButtons}
			footerProps={{ columns: footerColumns, bottomLinks: footerBottomLinks }}
		>
			<Section>
				<ButtonLink
					color="orange"
					variant="normal"
					onClick={() => setLoginOpen(true)}
				>
					Войти
				</ButtonLink>
				<ButtonLink
					color="blue"
					variant="bold"
					onClick={() => setRegisterOpen(true)}
				>
					Присоединиться
				</ButtonLink>
			</Section>

			{isLoginOpen && (
				<Modal onClose={() => setLoginOpen(false)}>
					<LoginForm />
				</Modal>
			)}

			{isRegisterOpen && (
				<Modal onClose={() => setRegisterOpen(false)}>
					<RegistrationForm />
				</Modal>
			)}
		</Layout>
	);
};
