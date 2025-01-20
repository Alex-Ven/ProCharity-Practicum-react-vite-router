import React from 'react';
import { Layout } from '../../components/Common/Layout/Layout';
import { Section } from '../../components/Common/Layout/Section';
import { CardLogin } from '../../components/Common/Card/Card'; // Карточка для отображения формы
import { LoginForm } from '../../screens/Forms/LoginForm'; // Форма авторизации

export const LoginPage = () => {
  return (
    <Layout>
      <Section>
        <CardLogin>
          <LoginForm />
        </CardLogin>
      </Section>
    </Layout>
  );
};
