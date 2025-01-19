import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Tooltip } from './Tooltip';

// Метаданные для Storybook
export default {
  title: 'Components/Tooltip', // Папка и имя компонента в Storybook
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: 'Всплывающая подсказка, которая отображается при наведении.',
      },
    },
  },
  argTypes: {
    text: {
      description: 'Текст, который отображается в подсказке',
      control: 'text',
    },
    children: {
      description: 'Элемент, к которому привязана подсказка',
      control: false,
    },
  },
} as Meta;

// Базовый шаблон
const Template: StoryFn<{ text: string }> = (args) => (
  <Tooltip {...args}>
    <button style={{ padding: '10px 20px', cursor: 'pointer' }}>
      Наведи на меня
    </button>
  </Tooltip>
);

// История: Основной пример
export const Default = Template.bind({});
Default.args = {
  text: 'Это всплывающая подсказка!',
};

// История: С длинным текстом
export const LongText = Template.bind({});
LongText.args = {
  text: 'Это длинная подсказка, которая может содержать больше текста и демонстрировать перенос строк, если это необходимо.',
};

// История: Пример с другим дочерним элементом
export const WithIcon = () => (
  <Tooltip text="Подсказка для иконки">
    <span
      style={{
        display: 'inline-block',
        padding: '8px',
        backgroundColor: '#eee',
        borderRadius: '50%',
        cursor: 'pointer',
      }}
    >
      ❓
    </span>
  </Tooltip>
);
