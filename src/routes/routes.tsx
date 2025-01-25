import main from "../pages/HomePage";
import login from "../pages/LoginPage";
import register from "../pages/RegistrationPage";

export const routes = [
	{ index: true, ...main },
	{ path: '/login', ...login },
	{ path: '/register', ...register }
];