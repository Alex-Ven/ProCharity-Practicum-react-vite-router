// Тип для данных формы регистрации
export interface RegistrationFormData {
  phone: string;
  city: string;
  birthDate: string;
  profileLink: string;
}

// Тип для ответа от сервера
export interface MockResponse {
  success: boolean;
  message: string;
  user: {
    id: number;
    phone: string;
    city: string;
    birthDate: string;
    profileLink: string;
  };
}

// Моковая функция для регистрации пользователя
export const registerUser = (formData: RegistrationFormData): Promise<MockResponse> => {
  console.log("Регистрация данных отправлена на сервер:", formData);

  // Имитация успешного ответа от сервера
  const mockResponse: MockResponse = {
    success: true,
    message: "Регистрация прошла успешно!",
    user: {
      id: Date.now(),
      phone: formData.phone,
      city: formData.city,
      birthDate: formData.birthDate,
      profileLink: formData.profileLink,
    },
  };

  return new Promise((resolve) => {
    setTimeout(() => resolve(mockResponse), 1000); // Задержка в 1 секунду
  });
};
