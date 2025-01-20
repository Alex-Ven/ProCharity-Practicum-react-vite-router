import React, { useState } from 'react';
import { Layout } from '../../components/Common/Layout/Layout';
import { Section } from '../../components/Common/Layout/Section';
import { Modal } from '../../containers/Modal/Modal';
import { LoginForm } from '../../screens/Forms/LoginForm';
import { RegistrationForm } from '../../screens/Forms/RegistrationForm';
import { ButtonLink } from '../../components/Common/Action/Link/Link';

export type HomePageProps = {
  user?: { name: string }; // Опциональные данные пользователя, полученные из лоадера
};

export function HomePage({ user }: HomePageProps) {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  return (
    <Layout>
      <Section>
        {user ? (
          <h1>Добро пожаловать, {user.name}!</h1>
        ) : (
          <>
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
          </>
        )}
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
}
