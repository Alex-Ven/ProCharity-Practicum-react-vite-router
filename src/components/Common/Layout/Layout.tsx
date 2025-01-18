// src/components/Common/Layout/Layout.tsx

import {Header} from './Header/Header'; // Импортируем Header компонент
import {Footer} from './Footer/Footer'; // Импортируем Footer компонент

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="layout">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};
