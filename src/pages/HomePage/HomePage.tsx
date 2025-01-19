import React from 'react';
import { Header } from '../../components/Common/Layout/Header/Header';
import { SectionHeroUrgant } from '../../components/Public/Hero/SectionHeroUrgant/SectionHeroUrgant';
import { Footer } from '../../components/Common/Layout/Footer/Footer'; // Импортируем футер
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="home-page__content">
        <SectionHeroUrgant />
      </main>
      <Footer /> 
    </div>
  );
};
