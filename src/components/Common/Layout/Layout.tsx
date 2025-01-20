import './Layout.scss';

import { Header } from './Header/Header'; // Импортируем Header компонент
import { Footer } from './Footer/Footer'; // Импортируем Footer компонент

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__content">{children}</main> {/* Добавлен класс */}
      <Footer />
    </div>
  );
};
