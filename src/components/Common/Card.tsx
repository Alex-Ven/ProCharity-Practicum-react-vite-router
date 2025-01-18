import React from 'react';

// Базовый компонент Card
const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="card">{children}</div>;
};

// Пример реализации других типов карточек

const CardVolunteer = ({ children }: { children: React.ReactNode }) => {
  return <div className="card card-volunteer">{children}</div>;
};

const CardCompanyVolunteer = ({ children }: { children: React.ReactNode }) => {
  return <div className="card card-company-volunteer">{children}</div>;
};

const CardCompany = ({ children }: { children: React.ReactNode }) => {
  return <div className="card card-company">{children}</div>;
};

const CardFund = ({ children }: { children: React.ReactNode }) => {
  return <div className="card card-fund">{children}</div>;
};

const CardFundStaff = ({ children }: { children: React.ReactNode }) => {
  return <div className="card card-fund-staff">{children}</div>;
};

const CardTask = ({ children }: { children: React.ReactNode }) => {
  return <div className="card card-task">{children}</div>;
};

const CardCategoryLarge = ({ children }: { children: React.ReactNode }) => {
  return <div className="card card-category-large">{children}</div>;
};

const CardContentItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="card card-content-item">{children}</div>;
};

const CardNews = ({ children }: { children: React.ReactNode }) => {
  return <div className="card card-news">{children}</div>;
};

const CardNumbers = ({ children }: { children: React.ReactNode }) => {
  return <div className="card card-numbers">{children}</div>;
};

// Экспорт компонентов
export {
  Card,
  CardVolunteer,
  CardCompanyVolunteer,
  CardCompany,
  CardFund,
  CardFundStaff,
  CardTask,
  CardCategoryLarge,
  CardContentItem,
  CardNews,
  CardNumbers,
};
