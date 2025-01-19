import React from 'react';
import { Header } from '../../components/Common/Layout/Header/Header';
import { Footer } from '../../components/Common/Layout/Footer/Footer';
import { RegistrationForm } from '../../components/Forms/RegistrationForm';
import './RegistrationPage.scss';

export const RegistrationPage = () => {
	return (
		<div className="registration-page">
			<Header />
			<main className="registration-page__main">
				<RegistrationForm />
			</main>
			<Footer />
		</div>
	);
};
