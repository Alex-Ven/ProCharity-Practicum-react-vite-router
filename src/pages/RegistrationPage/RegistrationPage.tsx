import React from 'react';
import { Header } from '../../components/Common/Layout/Header/Header';
import { Footer } from '../../components/Common/Layout/Footer/Footer';
import { RegistrationForm } from '../../screens/Forms/RegistrationForm';
import { Layout } from '@/components/Common/Layout/Layout';
import { Section } from '@/components/Common/Layout/Section';
import { CardLogin } from '@/components/Common/Card/Card';

export const RegistrationPage = () => {
	return (
		<Layout>
      <Section>
        <CardLogin>
          <RegistrationForm />
        </CardLogin>
      </Section>
    </Layout>
	);
};
