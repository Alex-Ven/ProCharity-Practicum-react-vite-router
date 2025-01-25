import React from 'react';
import './Section.scss';

type SectionProps = {
  children: React.ReactNode;
};

export const Section = ({ children }: SectionProps) => (
  <section className="section">{children}</section>
);
