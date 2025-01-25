import React, { useState } from 'react';
import { Field } from '../Forms/Field';
import { InputText } from './Input/InputText';
import { InputEmail } from './Input/InputEmail';
import { InputPassword } from './Input/InputPassword';
import { InputNumber } from './Input/InputNumber/InputNumber';
import { InputCity } from './Input/InputCity/InputCity';
import { InputDate } from './Input/InputDate/InputDate';
import { InputLink } from './Input/InputLink/InputLink';
import { Button } from '../../components/Common/Action/Batton/Button';
import { registerUser } from '../../api/registrationApi';
import { Form } from 'react-router-dom'; // Подключение Form из react-router
import './RegistrationForm.scss';

export const RegistrationForm = () => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
		phone: '+7',
		city: '',
		birthDate: '',
		profileLink: '',
	});

	const [error, setError] = useState<string | null>(null);

	const handleChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
		setError(null);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		const {
			username,
			email,
			password,
			confirmPassword,
			phone,
			city,
			birthDate,
			profileLink,
		} = formData;

		if (
			!username ||
			!email ||
			!password ||
			!confirmPassword ||
			!phone ||
			!city ||
			!birthDate ||
			!profileLink
		) {
			setError('Все поля должны быть заполнены!');
			return;
		}

		if (password !== confirmPassword) {
			setError('Пароли не совпадают!');
			return;
		}

		registerUser(formData)
			.then((response) => {
				console.log('Response from API:', response);
				alert(response.message || 'Регистрация прошла успешно');
			})
			.catch((err) => {
				if (err instanceof Error) {
					console.error('Ошибка регистрации:', err);
					setError(err.message);
				} else {
					setError('Произошла ошибка при регистрации.');
				}
			});
	};

	return (
		<div className="register-form">
			<h2 className="register-form__title">Личные данные</h2>
			{/* Используем Form из react-router */}
			<Form method="post" className="register-form__form" onSubmit={handleSubmit}>
				{error && <p className="register-form__error">{error}</p>}

				<Field label="Имя пользователя">
					<InputText
						id="username"
						value={formData.username}
						onChange={(value) => handleChange('username', value)} // Передаем строку
						placeholder="Введите ваше имя пользователя"
						required
					/>
				</Field>

				<Field label="Электронная почта">
					<InputEmail
						id="email"
						value={formData.email}
						onChange={(value) => handleChange('email', value)} // Передаем строку
						placeholder="Введите вашу электронную почту"
						required
					/>
				</Field>

				<Field label="Пароль">
					<InputPassword
						id="password"
						value={formData.password}
						onChange={(value) => handleChange('password', value)} // Передаем строку
						placeholder="Введите пароль"
						required
					/>
				</Field>

				<Field label="Подтвердите пароль">
					<InputPassword
						id="confirmPassword"
						value={formData.confirmPassword}
						onChange={(value) => handleChange('confirmPassword', value)} // Передаем строку
						placeholder="Введите пароль повторно"
						required
					/>
				</Field>

				<Field label="Номер телефона">
					<InputNumber
						id="phone"
						value={formData.phone} // Значение как строка
						onChange={(value) => handleChange('phone', value)} // Передаем строку в handleChange
						placeholder="Введите номер телефона"
						required
					/>
				</Field>

				<Field label="Город">
					<InputCity
						id="city"
						value={formData.city}
						onChange={(value) => handleChange('city', value)} // Передаем строку
						placeholder="Введите ваш город"
						required
					/>
				</Field>

				<Field label="Дата рождения">
					<InputDate
						id="birthDate"
						value={formData.birthDate}
						onChange={(value) => handleChange('birthDate', value)} // Передаем строку
						placeholder="Выберите дату"
						required
					/>
				</Field>

				<Field label="Ссылка на профиль">
					<InputLink
						id="profileLink"
						value={formData.profileLink}
						onChange={(value) => handleChange('profileLink', value)} // Передаем строку
						placeholder="Введите ссылку на ваш профиль"
						required
					/>
				</Field>

				<div className="register-form__actions">
					<Button type="primary" variant="rounded">
						Зарегистрироваться
					</Button>
				</div>
			</Form>
		</div>
	);
};
