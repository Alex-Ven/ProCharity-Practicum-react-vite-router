import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Anchor } from './Anchor';
import './Anchor.scss'; // Подключение CSS-стилей

const meta: Meta<typeof Anchor> = {
  title: 'Components/Anchor',
  component: Anchor,
  argTypes: {
    href: {
      control: 'text',
      description: 'The URL the anchor tag points to.',
      defaultValue: '#',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#' },
      },
    },
    children: {
      control: 'text',
      description: 'The text or elements inside the anchor.',
      defaultValue: 'Click Me',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'Click Me' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for custom styling.',
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Anchor>;

// Default story
export const Default: Story = {
  args: {
    href: '#',
    children: 'Default Anchor',
    className: 'inverted-link inverted-link--white',
  },
};

// Gray link story
export const GrayLink: Story = {
  args: {
    href: '#',
    children: 'Gray Anchor',
    className: 'inverted-link inverted-link--gray',
  },
};

// Light gray link story
export const LightGrayLink: Story = {
  args: {
    href: '#',
    children: 'Light Gray Anchor',
    className: 'inverted-link inverted-link--light-gray',
  },
};

// Orange link story
export const OrangeLink: Story = {
  args: {
    href: '#',
    children: 'Orange Anchor',
    className: 'inverted-link inverted-link--orange',
  },
};

// Long text story
export const LongText: Story = {
  args: {
    href: '#',
    children: 'This is an anchor with a very long text to demonstrate wrapping behavior.',
    className: 'inverted-link inverted-link--white',
  },
};
