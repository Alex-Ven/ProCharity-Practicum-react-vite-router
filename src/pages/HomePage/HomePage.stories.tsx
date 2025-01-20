import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { HomePage } from '../HomePage/HomePage';
//import '../../styles/index.scss'; // Подключаем общие стили, если требуется

export default {
  title: 'Pages/HomePage',
  component: HomePage,
} as Meta<typeof HomePage>;

const Template: StoryFn<typeof HomePage> = () => <HomePage />;

export const Default = Template.bind({});
Default.storyName = 'Home Page Default'; // Название истории
