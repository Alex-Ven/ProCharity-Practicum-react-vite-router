import React from 'react';
import { RegistrationForm } from '../../screens/Forms/RegistrationForm';
import { Layout } from '@/components/Common/Layout/Layout';
import { Section } from '@/components/Common/Layout/Section';
import Card from '@/components/Common/Card/Card';
import { ButtonLinkColor } from '@/components/Common/Action/Link/Link';

export const RegistrationPage = () => {
	const headerActionButtons = [
		{ label: 'Войти', href: '/login', color: 'orange' as ButtonLinkColor },
	];
	return (
		<Layout actionButtons={headerActionButtons}>
			<Section>
				<Card variant="login">
					<RegistrationForm />
				</Card>
			</Section>
		</Layout>
	);
};
