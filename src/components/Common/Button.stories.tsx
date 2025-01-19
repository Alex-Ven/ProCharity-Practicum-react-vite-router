import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonOutline, ButtonLink, GoToLink, ShowMoreLink, AddLink } from './Button';

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

// Истории для кнопок
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

// Meta для кнопок-ссылок
const buttonLinkMeta: Meta<typeof ButtonLink> = {
  title: 'Components/ButtonLink',
  component: ButtonLink,
  argTypes: {
    variant: {
      control: 'select',
      options: ['normal', 'bold'],
    },
    color: {
      control: 'select',
      options: ['blue', 'orange'], // Допустимые цвета
    },
  },
};
export const BlueLink: StoryObj<typeof ButtonLink> = {
  args: {
    href: '#',
    children: 'Blue Link',
    color: 'blue',
    variant: 'normal',
  },
};

export const OrangeLink: StoryObj<typeof ButtonLink> = {
  args: {
    href: '#',
    children: 'Orange Link',
    color: 'orange',
    variant: 'bold',
  },
};

export const GoToLinkStory: StoryObj<typeof ButtonLink> = {
  render: () => <GoToLink href="#">Go to Link</GoToLink>,
};

export const ShowMoreLinkStory: StoryObj<typeof ButtonLink> = {
  render: () => <ShowMoreLink href="#">Show More</ShowMoreLink>,
};

export const AddLinkStory: StoryObj<typeof ButtonLink> = {
  render: () => <AddLink href="#">Add Link</AddLink>,
};

// Экспорт для обоих Meta
export { buttonLinkMeta as ButtonLinkMeta, buttonMeta as ButtonMeta };
