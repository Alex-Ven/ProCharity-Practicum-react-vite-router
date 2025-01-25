import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonOutline } from './Button';

// Meta для кнопок
const buttonMeta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    variant: {
      control: 'select',
      options: ['rounded', 'square'],
    },
  },
};
export default buttonMeta;

type Story = StoryObj<typeof Button>;

// Сетка для всех кнопок
export const ButtonGrid: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '16px',
      }}
    >
      <Button type="primary" variant="rounded">
        Primary Rounded
      </Button>
      <Button type="primary" variant="square">
        Primary Square
      </Button>
      <Button type="secondary" variant="rounded">
        Secondary Rounded
      </Button>
      <Button type="secondary" variant="square">
        Secondary Square
      </Button>
      <ButtonOutline>Outline Button</ButtonOutline>
    </div>
  ),
};

// Истории для отдельных кнопок
export const PrimaryButton: Story = {
  args: {
    children: 'Primary Button',
    type: 'primary',
    variant: 'rounded',
  },
};

export const SecondaryButton: Story = {
  args: {
    children: 'Secondary Button',
    type: 'secondary',
    variant: 'square',
  },
};

export const OutlineButton: Story = {
  render: (args) => <ButtonOutline {...args} />,
  args: {
    children: 'Outline Button',
  },
};
