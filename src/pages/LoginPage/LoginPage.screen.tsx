import React from 'react';
import { Layout } from '../../components/Common/Layout/Layout';
import { Section } from '../../components/Common/Layout/Section';
import { CardLogin } from '../../components/Common/Card/Card';
import { LoginForm } from '../../screens/Forms/LoginForm'; 

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
