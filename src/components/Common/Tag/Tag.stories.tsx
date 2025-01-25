import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';
import './Tag.scss';

// Метаинформация о гриде для Storybook
const meta: Meta = {
  title: 'Components/Tag/Grid', // Категория и название
  component: Tag,
  parameters: {
    layout: 'centered', // Центрирование компонента в Storybook
  },
};

export default meta;

type Story = StoryObj;

// Сетка с примерами всех вариантов
export const TagGrid: Story = {
  render: () => (
    <div className="tag-grid">
      <div className="tag-grid__item">
        <Tag label="Primary Tag" variant="primary" />
        <p>Primary</p>
      </div>
      <div className="tag-grid__item">
        <Tag label="Outline Tag" variant="outline" />
        <p>Outline</p>
      </div>
      <div className="tag-grid__item">
        <Tag label="Views Tag" variant="views" />
        <p>Views</p>
      </div>
      <div className="tag-grid__item">
        <Tag label="Diamond Tag" variant="diamond" />
        <p>Diamond</p>
      </div>
    </div>
  ),
};
