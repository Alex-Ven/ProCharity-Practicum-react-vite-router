import React, { useState } from 'react';
import { InputNumber } from '../../components/Forms/Input/InputNumber/InputNumber';
import { InputCity } from '../../components/Forms/Input/InputCity/InputCity';
import { InputDate } from '../../components/Forms/Input/InputDate/InputDate';
import { InputLink } from '../../components/Forms/Input/InputLink/InputLink';
import { Button } from '../../components/Common/Button';
import './RegistrationForm.scss';

export const RegistrationForm = () => {
	const [formData, setFormData] = useState({
		phone: '+7',
		city: '',
		birthDate: '',
		profileLink: '',
	});

	const handleChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Submitted data:', formData);
		alert('Регистрация прошла успешно!');
	};

	return (
		<div className="registration-form">
			<h2 className="registration-form__title">Личные данные</h2>
			<form className="registration-form__form" onSubmit={handleSubmit}>
				<div className="registration-form__field">
        <label className="registration-form__label" htmlFor="phone">Номер телефона</label>
					<InputNumber
						id="phone"
						value={Number(formData.phone)}
						onChange={(e) => {
							const updatedValue = e.target.value.startsWith('+7')
								? e.target.value
								: '+7' + e.target.value.replace(/[^0-9]/g, '');
							handleChange('phone', updatedValue);
						}}
						
						placeholder="Введите номер телефона"
						required
					/>
				</div>

				<div className="registration-form__field">
        <label className="registration-form__label" htmlFor="city">Город</label>
					<InputCity
						id="city"
						value={formData.city}
						onChange={(e) => handleChange('city', e.target.value)}
						
						placeholder="Введите ваш город"
						required
					/>
				</div>

				<div className="registration-form__field">
        <label className="registration-form__label" htmlFor="birthDate">Дата рождения</label>
					<InputDate
						id="birthDate"
						value={formData.birthDate}
						onChange={(e) => handleChange('birthDate', e.target.value)}
						
						placeholder="Выберите дату"
						required
					/>
				</div>

				<div className="registration-form__field">
        <label className="registration-form__label" htmlFor="profileLin">Ссылка на профиль</label>
					<InputLink
						id="profileLink"
						value={formData.profileLink}
						onChange={(e) => handleChange('profileLink', e.target.value)}
						
						placeholder="Введите ссылку на ваш профиль"
					/>
				</div>

				<div className="registration-form__actions">
					<Button type="primary" variant="square">
						Зарегистрироваться
					</Button>
				</div>
			</form>
		</div>
	);
};
