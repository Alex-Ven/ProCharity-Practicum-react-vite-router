import React from 'react';

// Базовый компонент User
const User = ({ name, avatar }: { name: string; avatar: string }) => {
  return (
    <div className="user">
      <img src={avatar} alt="Avatar" />
      <span>{name}</span>
    </div>
  );
};

// Компонент Avatar
const Avatar = ({ avatar }: { avatar: string }) => {
  return <img src={avatar} alt="Avatar" className="avatar" />;
};

// Другие специализированные компоненты
const UserLargeVertical = ({ name, avatar }: { name: string; avatar: string }) => {
  return (
    <div className="user-large-vertical">
      <Avatar avatar={avatar} />
      <h2>{name}</h2>
    </div>
  );
};

const UserTaggedMedium = ({ name, tag }: { name: string; tag: string }) => {
  return (
    <div className="user-tagged-medium">
      <span className="user-name">{name}</span>
      <span className="user-tag">{tag}</span>
    </div>
  );
};

const UserCompanyLarge = ({ company, logo }: { company: string; logo: string }) => {
  return (
    <div className="user-company-large">
      <img src={logo} alt={`${company} Logo`} />
      <span>{company}</span>
    </div>
  );
};

const UserFundLarge = ({ fund, description }: { fund: string; description: string }) => {
  return (
    <div className="user-fund-large">
      <h3>{fund}</h3>
      <p>{description}</p>
    </div>
  );
};

const UserVolunteerLarge = ({ name, avatar, role }: { name: string; avatar: string; role: string }) => {
  return (
    <div className="user-volunteer-large">
      <Avatar avatar={avatar} />
      <div>
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
};

// Экспорт всех компонентов
export {
  User,
  Avatar,
  UserLargeVertical,
  UserTaggedMedium,
  UserCompanyLarge,
  UserFundLarge,
  UserVolunteerLarge, // Исправлено название (Volunter -> Volunteer)
};
