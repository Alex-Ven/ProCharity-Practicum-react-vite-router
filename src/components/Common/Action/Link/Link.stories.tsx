import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ButtonLink, GoToLink, ShowMoreLink, AddLink } from './Link';

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
      options: ['blue', 'orange'],
    },
  },
};
export default buttonLinkMeta;

type Story = StoryObj<typeof ButtonLink>;

// Сетка для всех ссылок
export const LinkGrid: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '16px',
      }}
    >
      <ButtonLink href="#" color="blue" variant="normal">
        Blue Normal
      </ButtonLink>
      <ButtonLink href="#" color="blue" variant="bold">
        Blue Bold
      </ButtonLink>
      <ButtonLink href="#" color="orange" variant="normal">
        Orange Normal
      </ButtonLink>
      <ButtonLink href="#" color="orange" variant="bold">
        Orange Bold
      </ButtonLink>
      <GoToLink href="#">Go to Link</GoToLink>
      <ShowMoreLink href="#">Show More</ShowMoreLink>
      <AddLink href="#">Add Link</AddLink>
    </div>
  ),
};

// Истории для отдельных кнопок-ссылок
export const BlueLink: Story = {
  args: {
    href: '#',
    children: 'Blue Link',
    color: 'blue',
    variant: 'normal',
  },
};

export const OrangeLink: Story = {
  args: {
    href: '#',
    children: 'Orange Link',
    color: 'orange',
    variant: 'bold',
  },
};

export const GoToLinkStory: Story = {
  render: () => <GoToLink href="#">Go to Link</GoToLink>,
};

export const ShowMoreLinkStory: Story = {
  render: () => <ShowMoreLink href="#">Show More</ShowMoreLink>,
};

export const AddLinkStory: Story = {
  render: () => <AddLink href="#">Add Link</AddLink>,
};
