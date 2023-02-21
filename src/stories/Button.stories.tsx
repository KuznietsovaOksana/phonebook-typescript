import React from 'react';
import Button from '../components/Button/Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      name: 'Type',
      defaultValue: 'button',
      description: 'Button type',
      type: { name: 'string', required: true },
      control: { type: 'select', options: ['button', 'submit', 'reset'] },
    },
    radius: {
      name: 'Radius',
      defaultValue: '5px',
      options: ['5px', '10px'],
      description: 'Border radius',
      type: { name: 'string', required: false },
      control: { type: 'radio' },
    },
    color: {
      name: 'Color',
      defaultValue: 'lightgrey',
      description: 'Button color',
      type: { name: 'string', required: false },
      control: { type: 'color' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  radius: '5px',
  type: 'button',
  border: 'none',
  color: 'lightgrey',
  height: '30px',
  width: '200px',
  children: 'Button',
  cursor: 'pointer',
};

export const Pink = Template.bind({});
Pink.args = {
  radius: '10px',
  type: 'submit',
  border: '3px transparent solid',
  color: 'pink',
  height: '40px',
  width: '200px',
  children: 'Create',
  cursor: 'pointer',
};
