import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const cardMeta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered', // Центрирование всех историй
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['login', 'secondary', 'highlight'], // Ваши варианты
    },
  },
};
export default cardMeta;

type Story = StoryObj<typeof Card>;

// Сетка для отображения всех вариантов
export const CardGrid: Story = {
  render: () => (
    <div className="card-grid">
      <Card>Default Card</Card>
      <Card variant="login">Login Card</Card>
      <Card variant="secondary">Secondary Card</Card>
      <Card variant="highlight">Highlight Card</Card>
    </div>
  ),
};
