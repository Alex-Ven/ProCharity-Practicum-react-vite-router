import React from 'react';
import { Layout } from '../../components/Common/Layout/Layout';
import { Section } from '../../components/Common/Layout/Section';
import Card from '../../components/Common/Card/Card'; // Карточка для отображения формы
import { LoginForm } from '../../screens/Forms/LoginForm'; // Форма авторизации
import { ButtonLinkColor, ButtonLinkVariant } from '@/components/Common/Action/Link/Link';

export const LoginPage = () => {

  const headerMenuItems = [
		{ label: 'Главная', href: '/' },
		{ label: 'О проекте', href: '/about' },
		{ label: 'Контакты', href: '/contact' },
	];

  const headerActionButtons = [
		{
			label: 'Присоединиться',
			href: '/register',
      color: 'blue' as ButtonLinkColor,
			variant: 'bold' as ButtonLinkVariant,
		},
	];


  return (
    <Layout
    logoSrc="/path/to/logo.png"
			menuItems={headerMenuItems}
			actionButtons={headerActionButtons}>
      <Section>
        <Card variant="login">
          <LoginForm />
        </Card>
      </Section>
    </Layout>
  );
};
